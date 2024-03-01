import { getGameGenreByID } from "../../[id]/page";
import EditGameGenreForm from "@/app/components/EditGameGenreForm";

const EditGameGenre = async ({ params }) => {
    const {id} = params;
    const {gameGenre} = await getGameGenreByID(id);

    return(<div className="w-full flex justify-center">
        <EditGameGenreForm id={id} gameGenreName={gameGenre.name}
        gameGenreDescription={gameGenre.description}></EditGameGenreForm>
    </div>)
}

export default EditGameGenre;