import Link from "next/link";

export const getGameByID = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/games/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error fetching game");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading game", error);
  }
};

const GamePage = async ({ params }) => {
  const { videogame } = await getGameByID(params.id);
  console.log(videogame);

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl flex items-center font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[25px] mb-1 mr-2"
          viewBox="0 0 24 24"
        >
          <title>Games</title>
          <path d="M7.97,16L5,19C4.67,19.3 4.23,19.5 3.75,19.5A1.75,1.75 0 0,1 2,17.75V17.5L3,10.12C3.21,7.81 5.14,6 7.5,6H16.5C18.86,6 20.79,7.81 21,10.12L22,17.5V17.75A1.75,1.75 0 0,1 20.25,19.5C19.77,19.5 19.33,19.3 19,19L16.03,16H7.97M7,8V10H5V11H7V13H8V11H10V10H8V8H7M16.5,8A0.75,0.75 0 0,0 15.75,8.75A0.75,0.75 0 0,0 16.5,9.5A0.75,0.75 0 0,0 17.25,8.75A0.75,0.75 0 0,0 16.5,8M14.75,9.75A0.75,0.75 0 0,0 14,10.5A0.75,0.75 0 0,0 14.75,11.25A0.75,0.75 0 0,0 15.5,10.5A0.75,0.75 0 0,0 14.75,9.75M18.25,9.75A0.75,0.75 0 0,0 17.5,10.5A0.75,0.75 0 0,0 18.25,11.25A0.75,0.75 0 0,0 19,10.5A0.75,0.75 0 0,0 18.25,9.75M16.5,11.5A0.75,0.75 0 0,0 15.75,12.25A0.75,0.75 0 0,0 16.5,13A0.75,0.75 0 0,0 17.25,12.25A0.75,0.75 0 0,0 16.5,11.5Z" />
        </svg>
        {videogame.title} ({videogame.release_year})
      </h1>
      <div className="flex items-center">
        <Link href={`/developers/${videogame.developer._id}`}>
          <span className="flex items-center bg-gray-200 px-4 py-2 rounded-lg">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 mr-2"
                viewBox="0 0 24 24"
              >
                <title>Developers</title>
                <path d="M12,12L19.07,19.07C15.17,23 8.83,23 4.93,19.07C1,15.17 1,8.84 4.93,4.93C8.83,1 15.16,1 19.07,4.93L12,12M19,10A2,2 0 0,0 17,12A2,2 0 0,0 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10Z" />
              </svg>
            {videogame.developer.name}
          </span>
        </Link>

        <span className="flex border bg-blue-400 text-white font-semibold px-3 py-2 rounded-lg m-2">
        <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 mr-2 fill-white"
                viewBox="0 0 24 24"
              >
                <title>Game genre</title>
                <path d="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z" />
              </svg>
          {videogame.game_genre.name}
        </span>
      </div>
      <div className="flex gap-2 justify-center items-center">
        {videogame.platforms.map((platform) => (
          <span
            key={platform._id}
            className="flex border bg-gray-200 text-black font-semibold px-3 py-1 rounded-lg m-2"
          >
            {platform}
          </span>
        ))}
      </div>
      <div className="border my-2 p-3 mb-3 w-[400px] border-blue-400 rounded-lg">
        <span className="font-semibold">Description</span>
        <p className="mt-2 text-justify max-w-[100%] break-words max-h-[400px] overflow-y-auto">{videogame.description}</p>
      </div>
    </div>
  );
};

export default GamePage;
