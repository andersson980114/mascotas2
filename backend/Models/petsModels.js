import mongoose from "mongoose";

const petsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        index: {unique:true},
    },
    description:{
        type: String,
        required: true,
        trim: true,
    },
    race:{
        type:String,
        required:true,
        trim:true
    },
    species:{
        type:String,
        required:true,
        trim:true, 
        lowercase: true,
    },
    color:{
        type:String,
        required:true,
        trim:true
    },
    gender:{
        type:String,
        required:true, 
        lowercase: true,
        trim:true
    },
    image:{
        type: String,
        required: true,
        trim: true, 
    },
    age:{
        type:Number,
        required:true,
        trim:true
    },
    isAdopted: {
        type: Boolean,
        required: true,
        default: false,
      },
})

export const Pet = mongoose.model('Pets', petsSchema)