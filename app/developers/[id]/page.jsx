import Link from "next/link";

export const getDeveloperByID = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/developers/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error fetching developer");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading developer", error);
  }
};

const getDeveloperGames = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/developers/${id}/games`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Error fetching games");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading games", error);
  }
};

const DeveloperPage = async ({ params }) => {
  const { developer } = await getDeveloperByID(params.id);
  const { videogames } = await getDeveloperGames(params.id);

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl flex items-center font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[25px] mb-1 mr-2"
          viewBox="0 0 24 24"
        >
          <title>Developers</title>
          <path d="M12,12L19.07,19.07C15.17,23 8.83,23 4.93,19.07C1,15.17 1,8.84 4.93,4.93C8.83,1 15.16,1 19.07,4.93L12,12M19,10A2,2 0 0,0 17,12A2,2 0 0,0 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10Z" />
        </svg>
        {developer.name} [{developer.nacionality}]
      </h1>
      <div className="flex flex-col w-[35%] mt-4">
        Games
        {videogames.map((game) => (
          <div
            key={game._id}
            className="flex justify-between bg-gray-100 m-1 rounded-xl p-3"
          >
            <Link href={`/games/${game._id}`}>{game.title}</Link>
            <div className="w-[250px] text-right truncate">
              {game.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperPage;
