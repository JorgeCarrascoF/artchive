import mongoose, { Schema } from "mongoose";

const videogameSchema = new Schema(
  {
    title: String,
    description: String,
    developer: { type: Schema.Types.ObjectId, ref: "Developer" },
    game_genre: { type: Schema.Types.ObjectId, ref: "GameGenre" },
    release_year: Number,
    platforms: [String],
  },
  {
    timestamps: true,
  }
);

const Videogame =
  mongoose.models.Videogame || mongoose.model("Videogame", videogameSchema);

export default Videogame;
