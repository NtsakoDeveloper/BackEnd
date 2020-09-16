const User = require('../models/Users')
const File = require('../models/Files')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')




module.exports ={

    register: async (req, res)=>{
        try{

            let {name, email,password} = req.body
            
            //Validating input
            if(!name || !email || !password ){
                return res.status(400).json({ msg: "Not all fields have been entered." });
            }
    
           const existingUser = await User.findOne({ email: email });
           if (existingUser){    
            return res
            .status(400)
            .json({ msg: "Already have access" });
           }
    
           //Hashing password
           const salt = await bcrypt.genSalt();
           const passwordHash = await bcrypt.hash(password, salt);
    
           const addUser = new User({
                 name: req.body.name,
                 email: req.body.email,
                 password: passwordHash,
           })
           const savedUser = await addUser.save()
           .then(data=>{
             console.log(data)
             res.send(data)
           }).catch(err=>{
             console.log(err)
           })
            
        }catch (err) { 
            res.status(500).json({ error: err.message });
          }
        
    },


    Login: async (req, res)=>{
        try{
            const { email, password } = req.body;
    
            //Check if field has been entered
            if (!email || !password){
               
                return res.status(400).json({ msg: "Enter valid email and password to login" });
            }
        const user = await User.findOne({ email: email });
    
        if (!user){
    
           return res
          .status(400)
          .json({ msg: "You do not have access" });
    
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid email or password" });
        }
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
              id: user._id,
              email:user.email,
              password:user.password
            },
          });

        } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },

    AddFile: async (req, res)=>{
      try{

          let {name, file} = req.body
          
          //Validating input
          if(!name || !file){
              return res.status(400).json({ msg: "File cannot be empty" });
          }
  
         const addfile = new File({
               name: req.body.name,
               file: req.body.file,
    
         })
         const savedfile = await addfile.save()
         .then(data=>{
           console.log(data)
           res.send(data)
         }).catch(err=>{
           console.log(err)
         })
          
      }catch (err) { 
          res.status(500).json({ error: err.message });
        }
      
  },

  getFile: async (req, res) =>{

    const file = await File.find({});
    //console.log(rental)
    res.status(200).json(file);

  },
 
  deletefile: async (req, res) =>{
    
    const file = await File.findByIdAndRemove(req.params.id)
    res.status(200).json(file+' Is deleted')
  }
}