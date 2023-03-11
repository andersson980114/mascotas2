import { Schema, model } from "mongoose";

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, 
    },
    email: {
      type: String,
      required: true,
      trim: true,
      index: { unique: true },
       
    },
    tel: {
      type: Number,
      required: true,
      trim: true, 
       
    },
  },
  { versionKey: false }
);

export const Users = model("Users", usersSchema);
