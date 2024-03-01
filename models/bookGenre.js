import mongoose, { Schema } from "mongoose";

const bookGenreSchema = new Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const BookGenre =
  mongoose.models.BookGenre || mongoose.model("BookGenre", bookGenreSchema);

export default BookGenre;
