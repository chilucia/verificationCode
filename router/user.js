const express = require('express')
const {GetallBags} = require('../controllers/Bags')
const {UserVerify, Forgotpassword, resetpassword} = require('../controllers/AddUser')

const Router = express.Router()

Router.route('/user').get(GetallBags)
Router.route('/userVerify/:userid').post(UserVerify)
Router.route('/forgotpassword').post(Forgotpassword)
Router.route('/changepassword/:id/:token').post(resetpassword)
// Router.route('/changepassword/:id').post(changepassword)


module.exports = Router