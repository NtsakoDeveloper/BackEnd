const Project = require('../models/Projects')

//const clashesWithExisting = require('../models/Booking');

module.exports ={

    addroom: async (req, res)=>{
        try{

            let {Description, Title, image} = req.body
            
            //Validating input
            if(!Description || !Title || !image ){
              return res.status(400).json({ msg: "Ensure all fields has been filled" });
            }
           
            //Finding Project
           const existinProject = await Project.findOne({ Title: Title });
    
           if (existinProject){    
            return res
            .status(400)
            .json({ msg: "Room Already Added" });
           }
    
           const addCoomet = new Project({
                 Description,
                 Title,
                 image
           })
    
           const savedCoomet = await addCoomet.save();
           res.json(savedCoomet)
          
            
        }catch (err) {
            res.status(500).json({ error: err.message });
          }
        
    },
    
    UpdateRoom: async (req, res) =>{
        try{

            Project.findOneAndUpdate({_id: req.body._id}, req.body, {new:true}, (err, user)=>{
        
              if(err){ res.status(400).json({ msg: "Failed to update the Room" })}
              else{
                res.send(user)
              }
               
            })
        
          } catch (err) {
            res.status(500).json({ error: err.message });
          }
    },

  

    getRooms: async (req,res) => {
      Project.find()
      .then(rooms => {
        res.json(rooms)
      })
      .catch(err => {
        res.json(err);
      })
    },

    deleteV: async (req,res) => {
      Project.findByIdAndDelete({_id: req.params.id})
      .then(vacs => {
        res.json(vacs)
      })
      .catch(err => {
        res.json(err);
      })
    },



}


