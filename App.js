const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path: './config/config.env'})
const cors = require('cors')
const Auth = require('./router/AddUser')
const adminroute = require('./router/adminRouter')
const user = require('./router/user')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', Auth)
app.use('/api', adminroute)
app.use('/api', user)

app.use('/',(req,res)=>{
    res.status(200).send("My Api is working")
})


module.exports = app