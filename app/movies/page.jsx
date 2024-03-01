import MovieList from "../components/MovieList";
import mongoose from "mongoose";

const Movies = () => {
    console.log(mongoose.models);

    return (
        <MovieList></MovieList>
    )
}

export default Movies;