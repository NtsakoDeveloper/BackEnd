const Vacancy = require('../models/Vacancies')

//const clashesWithExisting = require('../models/Booking');

module.exports ={

    addVacancy: async (req, res)=>{
        try{

            let {name, file} = req.body
            
            //Validating input
            if(!name || !file){
              return res.status(400).json({ msg: "Ensure all fields has been filled" });
            }
           
            //Finding Project
           const existinVac = await Vacancy.findOne({ name: name });
    
           if (existinVac){    
            return res
            .status(400)
            .json({ msg: "Vac Already Added" });
           }
    
           const addVac = new Vacancy({
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

            Vacancy.findOneAndUpdate({_id: req.body._id}, req.body, {new:true}, (err, user)=>{
        
              if(err){ res.status(400).json({ msg: "Failed to update the Vacancy" })}
              else{
                res.send(user)
              }
               
            })
        
          } catch (err) {
            res.status(500).json({ error: err.message });
          }
    },

  

    getVacancy: async (req,res) => {
      Vacancy.find()
      .then(vacs => {
        res.json(vacs)
      })
      .catch(err => {
        res.json(err);
      })
    },

    deleteV: async (req,res) => {
      Vacancy.findByIdAndDelete({_id: req.params.id})
      .then(vacs => {
        res.json(vacs)
      })
      .catch(err => {
        res.json(err);
      })
    },



}


