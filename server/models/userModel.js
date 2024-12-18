import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxLength: 40,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  address: {
    type:String,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  profile_img: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  createdAT: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAT: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export default mongoose.model("User", userSchema);