import mongoose, { Schema } from "mongoose";

const developerSchema = new Schema(
  {
    name: String,
    nacionality: String,
  },
  {
    timestamps: true,
  }
);

const Developer =
  mongoose.models.Developer || mongoose.model("Developer", developerSchema);

export default Developer;
