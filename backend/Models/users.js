import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    index: { unique: true },
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
    index: { unique: true },
  },
});

export const Users = mongoose.model("Users", usersSchema);
