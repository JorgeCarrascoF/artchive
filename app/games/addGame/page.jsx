import AddGameForm from "@/app/components/AddGameForm";
import { getDevelopers } from "@/app/components/DevelopersList";
import { getGameGenres } from "@/app/components/GamesGenresList";

const addGame = async ()=> {
    const {developers }= await getDevelopers();
    const {gameGenres} = await getGameGenres();

    return (
        <div className="w-full flex justify-center items-center">
            <AddGameForm developers={developers} genres={gameGenres}></AddGameForm>
        </div>
    );
}

export default addGame