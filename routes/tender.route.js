const express = require('express')
const mongoose = require('mongoose')
const router = require('express-promise-router')();



//const {validateParams,validateBody, schemas} = require('../helper/routeHelpers');

//Controller for the Vacation
const Vaccontroller = require('../controllers/tenders.controller');




//Using .env file variables
require('dotenv').config({
    path: './config/config.env'
})

//getting rooms
router.get('/Tenders',Vaccontroller.getVacancy);

//Registering the User
router.post('/Tenders', Vaccontroller.addVacancy )

//Updating User's details in the database
//Sometimes it takes time to understand the concept but it is okay learning is never meant to be easy 28/07/2020
router.post("/UpdateTenders", Vaccontroller.UpdateVac)

router.delete("/delete/:id", Vaccontroller.deleteV)

//Deleting the user
//router.delete("/deleteRoom", auth, roomcontroller.Delete)

module.exports = router