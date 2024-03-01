import mongoose, { Schema } from "mongoose";

const AuthorSchema = new Schema(
  {
    first_name: String,
    family_name: String,
    nacionality: String,
    date_of_birth: Number,
    date_of_death: Number,
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.models.Author || mongoose.model("Author", AuthorSchema);

export default Author;