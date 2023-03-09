import mongoose from "mongoose";

const petsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        index: {unique:true}    
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
        enum: ["cat", "dog"],
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
        enum: ["male", "female"],
        lowercase: true,
        trim:true
    },
    image:{
        type: String,
        required: true,
        trim: true,
        // validate: {
        //   validator: function(value) {
        //     const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        //     return urlRegex.test(value);
        //   },
        //   message: props => `${props.value} is not a valid URL`
        // }
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