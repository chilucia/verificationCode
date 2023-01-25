const AddUser = require('../models/Adduser')
const bcryptjs = require ('bcryptjs')
const jwt = require('jsonwebtoken')
const sendEmail = require('../utils/Email')
const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})

exports.newUser = async (req, res,)=>{
    try{
      const  {fullName, email, password} = req.body
      const salt = bcryptjs.genSaltSync(10);
      const hash = bcryptjs.hashSync(password, salt);

      const data = {
        fullName,
        email,
        password: hash,
      }
        const createUser = new AddUser(data)
        const myToken = jwt.sign({
            id:createUser._id,
            password: createUser.password, 
            IsAdmin:createUser.isAdmin}, process.env.JWTTOKEN, {expiresIn: "1d"})

        createUser.token = myToken;

        await createUser.save()

        const VerifyLink = `${req.protocol}://${req.get("host")}/api/userVerify/${createUser._id}`
        const message = `Thank you for registering with us. Please click on this link ${VerifyLink} to verify`;
        sendEmail({
          email: createUser.email,
          subject: "Kindly verify",
          message,
        });

        res.status(201).json({
            message: "User created",
            data: createUser
        })
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

exports.logIn = async(req,res) =>  {
    try{
        const {email,password} = req.body
        const check = await AddUser.findOne({email:email})
        if(!check) return res.status(404).json({message:'Not found'})
        const isPassword =await bcryptjs.compare(password,check.password)
        if(!isPassword) return res.status(404).json({message:'Email or password incorrect'})

        const myToken = jwt.sign({
            id:check._id,
            password: check.password, 
            IsAdmin:check.isAdmin}, process.env.JWTTOKEN, {expiresIn: "1d"})

        check.token = myToken 
        await check.save()
         res.status(201).json({
            message:"Successful",
            data:check
         })
    }catch(e){
        res.status(400).json({
            message:e.message
        })
    }
}

exports.UserVerify = async (req, res) => {
    try{    
        const userid = req.params.userid
        const user = await AddUser.findOne({userid})
        await AddUser.findByIdAndUpdate(
            user._id,
            {
                verify: true
            },
            {
                new : true
            }
        )

        res.status(200).json({
            message: "you have been verified"
        })

    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}


