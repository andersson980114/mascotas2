import mongoose from "mongoose";

const racesSchema = new mongoose.Schema({
  
    race:{
        type:String,
        required:true,
        trim:true
    },
})

export const Race = mongoose.model('Races', racesSchema)