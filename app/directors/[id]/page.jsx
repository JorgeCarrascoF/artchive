import Link from "next/link";

export const getDirectorByID = async (id) => {
  try {
    const res = await fetch(`${process.env.URL}/api/directors/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error fetching director");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading director", error);
  }
};

const getDirectorMovies = async (id) => {
  try {
    const res = await fetch(
      `${process.env.URL}/api/directors/${id}/movies`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Error fetching movies");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading movies", error);
  }
};

const DirectorPage = async ({ params }) => {
  const { director } = await getDirectorByID(params.id);
  const { movies } = await getDirectorMovies(params.id);

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl  flex items-center font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[25px] mb-1 mr-2"
          viewBox="0 0 24 24"
        >
          <title>Director</title>
          <path d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z" />
        </svg>
        {director.first_name} {director.family_name} [{director.nacionality}]
      </h1>
      <span>
        {director.date_of_birth &&
          `(${director.date_of_birth} - ${
            director.date_of_death ? `${director.date_of_death}` : "present"
          })`}
      </span>
      <div className="flex flex-col w-[35%] mt-4">
        Movies
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex justify-between bg-gray-100 m-1 rounded-xl p-3"
          >
            <Link href={`/movies/${movie._id}`}>{movie.title}</Link>
            <div className="w-[250px] text-right truncate">
              {movie.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorPage;
