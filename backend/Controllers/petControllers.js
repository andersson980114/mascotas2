import { Pet } from "../Models/petsModels.js";

{/* -------------------- add pet-----------------------*/ } 

export const addPet = async (req, res) => {
    try {
        const {name,description,race,species,color,gender,image,isAdopted,age} = req.body
        const pet =  new Pet({name,description,race,species,color,gender,image,isAdopted,age})
        await pet.save()
        return res.status(200).json({ok: 'New pet added'})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Server error"})
    }
}

{/* -------------------- find pet -----------------------*/ } 


export const findPet =   async (req, res) => {
    const {_id} = req.body
    try {
        const pet = await Pet.findById(_id)  
        //mascota no encontrada
        if(!pet)
            return res.status(400).json({error: "Pet not found"}) 
        //mascota encontrada
        return res.json({pet})
  
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Server error"})
    }
  };

  //find all
export const findAllPet =   async (req, res) => {
    try {
        const pets = await Pet.find() 
        //no hay mascotas
        if(!pets)
            return res.status(400).json({error: "No pets registered"})
        
        //mascotas obtenidas
        return res.json({pets})

    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "error de servidor"})
  }
};



{/* -------------------- update pet -----------------------*/ } 

export const upadtePet=   async (req, res) => {
    const {_id, name,description,race,species,color,gender,image,isAdopted,age} = req.body
    try {
        const pet = await Pet.findById(_id)  
        //pet no encontrada
        if(!pet)
            return res.status(400).json({error: "Pet no found, could not be modified"}) 
        
        //pet modificada
        await Pet.findByIdAndUpdate(_id, {name,description,race,species,color,gender,image,isAdopted,age})  
        pet.save()
        return res.json({ok:'Pet modified'})
  
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Server error"})
    }
  };


  {/* -------------------- delete pet -----------------------*/ } 

  export const deletePet =   async (req, res) => {
    const _id = req.params.id;
    try {
        const pet = await Pet.findById(_id)  
        //mascota no encontrada
        if(!pet) 
            return res.status(400).json({error: "Pet with ID "+_id+"  not found, could not be deleted "}) 
        
        //tarea eliminada
        await Pet.findByIdAndRemove(_id)    
        return res.json({ok: 'deleted Pet'})
  
    } catch (error) {
        console.log(error)
        return res.status(500).json({error: "Server error"})
    }
  };