const mongoose = require('mongoose')


const ConnectDB = async () =>{

    const connection = await mongoose.connect(process.env.MONGO_URL, {

        useNewUrlParser: true,
        useFindAndModify:false,
        useCreateIndex:true,
        useUnifiedTopology:true
    })

    console.log(`Mongo Connected ${connection.connection.host}`)
}



module.exports = ConnectDB