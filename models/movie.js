import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema(
  {
    title: String,
    description: String,
    release_year: Number,
    duration: Number,
    director: { type: Schema.Types.ObjectId, ref: "Director"},
    movie_genre: { type: Schema.Types.ObjectId, ref: "MovieGenre" },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

export default Movie;
