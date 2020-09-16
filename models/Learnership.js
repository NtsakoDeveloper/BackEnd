const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const LearnershiSchema = new Schema({


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
module.exports = Learnership = mongoose.model('Learnership', LearnershiSchema)

