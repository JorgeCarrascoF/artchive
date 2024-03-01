import Link from "next/link";
import DeleteMovieGenreButton from "./DeleteMovieGenreButton";

export const getMovieGenres = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/movieGenres", {
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

const MovieGenreList = async () => {
  const { movieGenres } = await getMovieGenres();

  return (
    <div className="w-full flex  flex-col items-center relative gap-3 justify-center pt-4">
      <Link
        href={"/movieGenres/addMovieGenre"}
        className="fixed right-5 top-20 lg: items-center w-fit border bg-blue-400 text-white font-semibold flex rounded-2xl px-3 py-2 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 fill-white mr-2"
          viewBox="0 0 24 24"
        >
          <title>Movie genres</title>
          <path d="M18,9H16V7H18M18,13H16V11H18M18,17H16V15H18M8,9H6V7H8M8,13H6V11H8M8,17H6V15H8M18,3V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3H18Z" />
        </svg>
        Add movie genre
      </Link>
      <div className="w-full mt-10 lg:mt-0 flex flex-col items-center justify-center gap-3">
        {movieGenres.map((genre) => (
          <div
            key={genre._id}
            className="flex w-[90%] lg:w-[60%] xl:w-[50%] border-2 rounded-xl border-blue-300 relative shadow-md shadow-blue-100 px-4 py-2 justify-between"
          >
            <div>
              <Link href={`/movieGenres/${genre._id}`} className="font-bold min-w-[20%] text-[0.85rem] sm:text-base truncate">
                {genre.name}
              </Link>
            </div>
            <div className="flex gap-3 absolute right-4 top-[50%] w-[50%] items-center">
              <DeleteMovieGenreButton id={genre._id}></DeleteMovieGenreButton>
              <Link href={`/movieGenres/editMovieGenre/${genre._id}`} className="font-bold absolute right-0 flex items-center text-lg"> 
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

export default MovieGenreList;
