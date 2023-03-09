import { Race } from "../Models/raceModels.js";

{/* -------------------- add race-----------------------*/ } 

export const addRace = async (req, res) => {
    try {
        const {race} = req.body
        const breed =  new Race({race})
        await breed.save()
        return res.status(200).json({ok: 'New race added'})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Server error"})
    }
}

{/* -------------------- find race -----------------------*/ } 


export const findRace =   async (req, res) => {
    const {_id} = req.body
    try {
        const breed = await Race.findById(_id)  
        //mascota no encontrada
        if(!breed)
            return res.status(400).json({error: "Race not found"}) 
        //mascota encontrada
        return res.json({breed})
  
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Server error"})
    }
  };

  //find all
export const findAllRaces =   async (req, res) => {
    try {
        const breeds = await Race.find() 
        //no hay mascotas
        if(!breeds)
            return res.status(400).json({error: "No races registered"})
        
        //mascotas obtenidas
        return res.json({breeds})

    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "error de servidor"})
  }
};



{/* -------------------- update race -----------------------*/ } 

export const upadteRace=   async (req, res) => {
    const {_id, race} = req.body
    try {
        const breed = await Race.findById(_id)  
        //race no encontrada
        if(!breed)
            return res.status(400).json({error: "Race no found, could not be modified"}) 
        
        //race modificada
        await Race.findByIdAndUpdate(_id, {race})  
        breed.save()
        return res.json({ok:'Race modified'})
  
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Server error"})
    }
  };


  {/* -------------------- delete race -----------------------*/ } 

  export const deleteRace =   async (req, res) => {
    const _id = req.params.id;
    try {
        const breed = await Race.findById(_id)  
        //mascota no encontrada
        if(!breed) 
            return res.status(400).json({error: "Race with ID "+_id+"  not found, could not be deleted "}) 
        
        //tarea eliminada
        await Race.findByIdAndRemove(_id)    
        return res.json({ok: 'Deleted race'})
  
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Server error"})
    }
  };