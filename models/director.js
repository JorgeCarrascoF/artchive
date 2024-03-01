import mongoose, { Schema } from "mongoose";

const directorSchema = new Schema(
  {
    first_name: String,
    family_name: String,
    date_of_birth: Number,
    date_of_death: Number,
    nacionality: String,
  },
  {
    timestamps: true,
  }
);

const Director =
  mongoose.models.Director || mongoose.model("Director", directorSchema);

export default Director;
