const express = require('express')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const cors = require("cors");


const formidable = require('formidable');



const app = express()
var fs = require('fs');
const File = require('./models/Files')

//Config Passport
require('./config/passport')(passport)


//Using .env file variables
require('dotenv').config({
    path: './config/config.env'
})

//Connecting database
connectDB()

//Body-parser
app.use(bodyParser.json())
//cors
app.use(cors());
//Express session middleware
app.use(session({
    secret: 'secrete',
    resave: true,
    saveUninitialized: true,
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


//Accesing Routes 
app.use('/', require('./routes/index.route'))
app.use('/users', require('./routes/users.route'))
app.use('/projects', require('./routes/project.route'))
app.use('/vacancies', require('./routes/vacancy.route'))
app.use('/learnership', require('./routes/learnership.route'))
app.use('/tenders', require('./routes/tender.route'))

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    
    console.log(`App listening to port ${PORT}`)
})