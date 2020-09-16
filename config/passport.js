const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


//Load User Models

const User = require('../models/Users')

module.exports = function(passport){
    passport.use(
        new localStrategy({usernameField: 'email'},(email,password, done)=>{
            //Match User

            User.findOne({email: email})
            .then(user =>{
                if(!user){
                  
                    return done(null, false, {message: "The email is not registered"})
                }

                //Match Password
                bcrypt.compare(password, user.passport, (err, match) =>{
                    if(match){
                        return done(null, user)
                    }
                    else{
                        return done(null, false, {message: 'Password incorrect'})
                    }
                })

            })
            .catch(err => console.log(err))
            
        })
    )

    passport.serializeUser((user, done)=> {
        done(null, user.id);
      });
    
      passport.deserializeUser((id, done) => {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
}

