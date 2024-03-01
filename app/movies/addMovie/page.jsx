import AddMovieForm from "@/app/components/AddMovieForm";
import { getDirectors } from "@/app/components/DirectorsList";
import { getMovieGenres } from "@/app/components/MovieGenreList";

const addMovie = async () => {
    const {directors} = await getDirectors();
    const {movieGenres} = await getMovieGenres()

    return (
        <div className="w-full flex justify-center items-center">
            <AddMovieForm directors={directors} movieGenres={movieGenres}></AddMovieForm>
        </div>
    )
}

export default addMovie;