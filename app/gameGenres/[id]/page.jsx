export const getGameGenreByID = async (id) => {
  try {
    const res = await fetch(`/api/gameGenres/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error fetching genre");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading genre", error);
  }
};

const GenrePage = async ({ params }) => {
  const { gameGenre } = await getGameGenreByID(params.id);

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl flex items-center font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[25px] mb-1 mr-2"
          viewBox="0 0 24 24"
        >
          <title>Game genre</title>
          <path d="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z" />
        </svg>
        {gameGenre.name}
      </h1>
      <p className="border my-2 p-3 mb-3 w-[400px] border-blue-400 rounded-lg text-justify break-words max-h-[400px] overflow-y-auto">
        {gameGenre.description}
      </p>
    </div>
  );
};

export default GenrePage;
