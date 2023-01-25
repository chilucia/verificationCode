const express = require('express')
const {newUser, logIn} = require('../controllers/AddUser')

const Router = express.Router()

Router.route('/sign').post(newUser)
Router.route('/login').post(logIn)


module.exports = Router