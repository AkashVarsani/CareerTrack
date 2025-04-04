import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const followSchema = new Schema({
  user: String,
  toUser: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Follow || model("Follow", followSchema);
