import Link from "next/link";
import DeleteGameGenreButton from "./DeleteGameGenreButton";

export const getGameGenres = async () => {
  try {
    const res = await fetch(`${process.env.URL}/api/gameGenres`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error fetching genres");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading genres", error);
  }
};

const GameGenreList = async () => {
  const { gameGenres } = await getGameGenres();

  return (
    <div className="w-full flex  flex-col items-center relative gap-3 justify-center pt-4">
      <Link
        href={"/gameGenres/addGameGenre"}
        className="fixed right-5 top-20 lg: items-center w-fit border bg-blue-400 text-white font-semibold flex rounded-2xl px-3 py-2 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 mr-2 fill-white"
          viewBox="0 0 24 24"
        >
          <title>Game genre</title>
          <path d="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z" />
        </svg>
        Add game genre
      </Link>
      <div className="w-full mt-10 lg:mt-0 flex flex-col items-center justify-center gap-3">
        {gameGenres.map((genre) => (
          <div
            key={genre._id}
            className="flex w-[90%] lg:w-[60%] xl:w-[50%] border-2 rounded-xl border-blue-300 relative shadow-md shadow-blue-100 px-4 py-2 justify-between"
          >
            <div>
              <Link
                href={`/gameGenres/${genre._id}`}
                className="font-bold min-w-[20%] text-[0.85rem] sm:text-base truncate"
              >
                {genre.name}
              </Link>
            </div>
            <div className="flex gap-3 absolute right-4 top-[50%] w-[50%] items-center">
              <DeleteGameGenreButton id={genre._id}></DeleteGameGenreButton>
              <Link href={`/gameGenres/editGameGenre/${genre._id}`} className="font-bold absolute right-0 flex items-center text-lg">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 fill-blue-500"
                  viewBox="0 0 24 24"
                >
                  <title>Edit genre</title>
                  <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameGenreList;
