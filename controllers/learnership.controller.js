const Learnership = require('../models/Learnership')

//const clashesWithExisting = require('../models/Booking');

module.exports ={

    addLearnerships: async (req, res)=>{
        try{

            let {name, file} = req.body
            
            //Validating input
            if(!name || !file){
              return res.status(400).json({ msg: "Ensure all fields has been filled" });
            }
           
            //Finding Project
           const existinOpp = await Learnership.findOne({ name: name });
    
           if (existinOpp){    
            return res
            .status(400)
            .json({ msg: "Vac Already Added" });
           }
    
           const addVac = new Learnership({
                 name,
                 file
           })
    
           const savedVac = await addVac.save();
           res.json(savedVac)
          
            
        }catch (err) {
            res.status(500).json({ error: err.message });
          }
        
    },
    
    UpdateVac: async (req, res) =>{
        try{

            Learnership.findOneAndUpdate({_id: req.body._id}, req.body, {new:true}, (err, user)=>{
        
              if(err){ res.status(400).json({ msg: "Failed to update the Learnership" })}
              else{
                res.send(user)
              }
               
            })
        
          } catch (err) {
            res.status(500).json({ error: err.message });
          }
    },

  

    getVacancy: async (req,res) => {
      Learnership.find()
      .then(vacs => {
        res.json(vacs)
      })
      .catch(err => {
        res.json(err);
      })
    },

    deleteV: async (req,res) => {
      Learnership.findByIdAndDelete({_id: req.params.id})
      .then(vacs => {
        res.json(vacs)
      })
      .catch(err => {
        res.json(err);
      })
    },




}


