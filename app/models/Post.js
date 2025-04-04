import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const postSchema = new Schema({
  user: String,
  caption: String,
  text: String,
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Post || model("Post", postSchema);
