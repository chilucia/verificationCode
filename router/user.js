const express = require('express')
const {GetallBags} = require('../controllers/Bags')
const {UserVerify} = require('../controllers/AddUser')

const Router = express.Router()

Router.route('/user').get(GetallBags)
Router.route('/userVerify/:userid').post(UserVerify)


module.exports = Router