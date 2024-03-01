import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: String,
    ISBN: String,
    description: String,
    author: { type: Schema.Types.ObjectId, ref: "Author" },
    book_genre: { type: Schema.Types.ObjectId, ref: "BookGenre" },
    year: Number,
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;
