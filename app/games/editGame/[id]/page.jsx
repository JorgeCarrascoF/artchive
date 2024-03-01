import { getGameByID } from "../../[id]/page";
import { getDevelopers } from "@/app/components/DevelopersList";
import EditGameForm from "@/app/components/EditGameForm";
import { getGameGenres } from "@/app/components/GamesGenresList";

const EditGame = async ({ params }) => {
  const { videogame } = await getGameByID(params.id);
  const { developers } = await getDevelopers();
  const { gameGenres } = await getGameGenres();

  return (
    <div className="flex justify-center w-full">
      <EditGameForm
        gameId={params.id}
        gameTitle={videogame.title}
        gameDescription={videogame.description}
        gameDeveloper={videogame.developer._id}
        gameGenre={videogame.game_genre._id}
        gamePlatforms={videogame.platforms}
        gameYear={videogame.release_year}
        developers={developers}
        genres={gameGenres}
      ></EditGameForm>
    </div>
  );
};

export default EditGame;
