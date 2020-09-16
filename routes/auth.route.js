const express = require('express')
const router = express.Router()

//Loading controllers
const{
    registerControler

} = require('../controller/auth.controller.js')

router.post('/register', registerControler)



module.exports = router