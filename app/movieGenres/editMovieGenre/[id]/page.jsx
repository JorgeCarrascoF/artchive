import { getMovieGenreByID } from "../../[id]/page";
import EditMovieGenreForm from "@/app/components/EditMovieGenreForm";

const EditMovieGenre = async ({ params }) => {
    const {id} = params;
    const {movieGenre} = await getMovieGenreByID(id);

    return (
    <div className="w-full flex justify-center">
      <EditMovieGenreForm id={id} movieGenreName={movieGenre.name}
      movieGenreDescription={movieGenre.description}></EditMovieGenreForm>
    </div>
  );

}

export default EditMovieGenre;