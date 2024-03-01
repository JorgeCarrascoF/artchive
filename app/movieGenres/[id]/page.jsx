export const getMovieGenreByID = async (id) => {
  try {
    const res = await fetch(`http://https://artchive.vercel.app//api/movieGenres/${id}`, {
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

const MovieGenrePage = async ({ params }) => {
  const { movieGenre } = await getMovieGenreByID(params.id);

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl flex items-center font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[25px] mb-1 mr-2"
          viewBox="0 0 24 24"
        >
          <title>Movie genres</title>
          <path d="M18,9H16V7H18M18,13H16V11H18M18,17H16V15H18M8,9H6V7H8M8,13H6V11H8M8,17H6V15H8M18,3V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3H18Z" />
        </svg>
        {movieGenre.name}
      </h1>
      <p className="border my-2 p-3 mb-3 w-[400px] border-blue-400 rounded-lg text-justify break-words max-h-[400px] overflow-y-auto">
        {movieGenre.description}
      </p>
    </div>
  );
};

export default MovieGenrePage;
