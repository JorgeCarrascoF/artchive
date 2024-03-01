import mongoose, { Schema } from "mongoose";

const movieGenreSchema = new Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const MovieGenre =
  mongoose.models.MovieGenre || mongoose.model("MovieGenre", movieGenreSchema);

  export default MovieGenre;
