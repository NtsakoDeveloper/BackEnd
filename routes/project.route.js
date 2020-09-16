const express = require('express')
const mongoose = require('mongoose')
const router = require('express-promise-router')();



//const {validateParams,validateBody, schemas} = require('../helper/routeHelpers');

//Controller for the project
const roomcontroller = require('../controllers/projects.controller');
const { schema } = require('../models/Room');



//Using .env file variables
require('dotenv').config({
    path: './config/config.env'
})

//getting rooms
router.get('/getProjects',roomcontroller.getRooms);

//Registering the User
router.post('/addProjects', roomcontroller.addroom )

//Updating User's details in the database
//Sometimes it takes time to understand the concept but it is okay learning is never meant to be easy 28/07/2020
router.post("/updateProjects", roomcontroller.UpdateRoom)

//Deleting the user
//router.delete("/deleteRoom", auth, roomcontroller.Delete)

module.exports = router