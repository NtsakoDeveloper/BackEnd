const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Room Schema
const ProjectSchema = new Schema({

   
    Description:{
        type:String,
        required:true
    },

    Title:{
        type:String,
        required:true
    },

    
    image:{
        type:String,
        required:true
    },
   


});


//Exporting Users <Remember Router> ensure same name  
//module.exports = User = mongoose.model('room', RoomSchema)
const Project = (module.exports = mongoose.model('Project',ProjectSchema));

