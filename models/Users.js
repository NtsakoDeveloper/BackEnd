const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({


    name: {
       type:String,
       required: true
    },
    

    email:{
        type:String,
        required:true
    },


    password: {
        type:String,
        required:true
    }
   
});


//Exporting Users <Remember Router> ensure same name  
module.exports = User = mongoose.model('user', UserSchema)

