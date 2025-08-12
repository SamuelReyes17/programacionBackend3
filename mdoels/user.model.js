import { model, Schema } from "mongoose";
import mongoose from "mongoose";

const userCollections = "users2";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },

  password: {
    type: String,
    required: true,
  },
  role: { type: String, default: "user" },
  pets: {
    type: Array,
    require: true,
    unique: false,
  },
});

const userModel = mongoose.model(userCollections, userSchema);

export default userModel;
