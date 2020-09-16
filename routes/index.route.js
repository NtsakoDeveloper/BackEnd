const express = require('express')
const router = require('express-promise-router')();


router.get('/', (req,res)=>{
    res.send("Hello MERN Stack")
})


module.exports = router