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
    validate: {
      validator: function (v) {
        const regEmail =
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        return regEmail.test(v);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
  },
  tel: {
    type: Number,
    required: true,
    trim: true,
    index: { unique: true },
    validate: {
      validator: function (v) {
        const regCel = /^(3[0-9]{2})[0-9]{3}[0-9]{4}$/gm;
        return regCel.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
});

export const Users = mongoose.model("Users", usersSchema);
