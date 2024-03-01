import mongoose, { Schema } from "mongoose";

const gameGenreSchema = new Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const GameGenre =
  mongoose.models.GameGenre || mongoose.model("GameGenre", gameGenreSchema);

export default GameGenre;
