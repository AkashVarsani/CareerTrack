import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  company: String,
  profession: String,
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  profile: String,
  bio: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || model("User", userSchema);
