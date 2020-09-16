const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Room Schema
const RoomSchema = new Schema({

    RoomNum: {
        type: String,
        required:true
    },

    Description:{
        type:String,
        required:true
    },

    Price:{
        type:Number,
        required:true
    },

    IsAvailable:{
        type:Boolean,
        required:true
    },

    Image:{
        type:String,
        required:true
    },
   
   //Connection between room and the the accomdation
    Rental : {
        type: Schema.Types.ObjectId,
        ref: 'rental'
    },

    //Connection between rooms and booking
    //sub-document
    bookings:[{type:Schema.Types.ObjectId, ref:'booking'}]


});


//Exporting Users <Remember Router> ensure same name  
//module.exports = User = mongoose.model('room', RoomSchema)
const room = (module.exports = mongoose.model('room',RoomSchema));

