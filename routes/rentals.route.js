const express = require('express')
const mongoose = require('mongoose')
const router = require('express-promise-router')();
const Rental = require('../models/Rental_Place')
const User = require('../models/Users')
const Room = require('../models/Room')


//Posting via embedding 

// controllers
const rentalcontroller = require('../controllers/rental.controller')

//adding accomdations
router.route('/')
.get(rentalcontroller.Index)
.post(rentalcontroller.addrental)

//Rental:id [For each rental i wonder how am gonna store a room yaz on front 
router.route('/:rentalId')
// .post()
 .get(rentalcontroller.getRental)
// .put()
// .patch()
// .delete()

router.route('/:rentalId/rooms')
.get(rentalcontroller.getRentalRooms)
.post(rentalcontroller.newRentalRoom)



module.exports = router





