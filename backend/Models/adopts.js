import { Schema, model } from "mongoose";

const adoptsSchema = new Schema(
  {
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
  },
  { versionKey: false }
);

export const Adopts = model("adopts", adoptsSchema);
