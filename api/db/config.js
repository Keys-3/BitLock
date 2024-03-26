const mongoose = require("mongoose");
require("dotenv").config();

const connectdb = () => {
  return mongoose.connect(process.env.DATABASE_STRING);
};

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
      default: " ",
    },
    lastName: {
      type: String,
      required: true,
      default: " ",
    },
    profilePicture: {
      type: String,
      default:null
    },
    documents:[{type:String}]
  },
  {
    versionKey: false,
  }
);



const User = mongoose.model("User", userSchema);
module.exports = { connectdb, User};
