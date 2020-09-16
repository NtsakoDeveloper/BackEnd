const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FileSchema = new Schema({


    name: {
       type:String,
       required: true
    },
    

    file:{
        type:String,
        required:true
    },

   
});


//Exporting Users <Remember Router> ensure same name  
module.exports = Files = mongoose.model('file', FileSchema)

