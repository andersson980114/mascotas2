import mongoose from "mongoose";

const adoptsSchema = new mongoose.Schema({
  id_pet: {
    type: String,
    required: true,
    trim: true,
    index: { unique: true },
  },
  id_user: {
    type: String,
    required: true,
    trim: true,
    index: { unique: true },
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
    trim: true,
  },
});

export const Adopts = mongoose.model("adopts", adoptsSchema);
