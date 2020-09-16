const express = require('express')
const mongoose = require('mongoose')
const router = require('express-promise-router')();
const auth = require('../middleware/auth')


//Controllers
const usercontrollers = require('../controllers/users.controller')

//Using .env file variables
require('dotenv').config({
    path: './config/config.env'
})

//Registering the User
router.post('/register', usercontrollers.register)

//AddFile
router.post('/file', usercontrollers.AddFile)
router.get('/file', usercontrollers.getFile)
router.delete('/file/:id', usercontrollers.deletefile)

//Login Handle
router.post('/login', usercontrollers.Login)





module.exports = router