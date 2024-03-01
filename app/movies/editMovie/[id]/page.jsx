import { getDirectors } from "@/app/components/DirectorsList";
import { getMovieByID } from "../../[id]/page";
import { getMovieGenres } from "@/app/components/MovieGenreList";
import EditMovieForm from "@/app/components/EditMovieForm";

const EditMovie = async ({params}) => {
    const {movie} = await getMovieByID(params.id);
    const {directors} = await getDirectors();
    const {movieGenres} = await getMovieGenres();

    console.log(movie)

    return(
        <div className="w-full flex justify-center">
            <EditMovieForm
                movieId={params.id}
                movieTitle={movie.title}
                movieDescription={movie.description}
                movieDuration={movie.duration}
                movieYear={movie.release_year}
                movieDirector={movie.director._id}
                movieGenre={movie.movie_genre._id}
                directors={directors}
                genres={movieGenres}
            ></EditMovieForm>
        </div>
    )

}

export default EditMovie;