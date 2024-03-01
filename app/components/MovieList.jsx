import Link from "next/link";
import DeleteMovieButton from "./DeleteMovieButton";

export const getMovies = async () => {
  try {
    const res = await fetch("${process.env.NEXT_PUBLIC_URL}/api/movies", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error fetching movies");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading movies", error);
  }
};

const MovieList = async () => {
  const { movies } = await getMovies();

  return (
    <div className="w-full flex  flex-col items-center relative gap-3 justify-center pt-4">
      <Link
        href={"/movies/addMovie"}
        className="fixed right-5 top-20 lg: items-center w-fit border bg-blue-400 text-white font-semibold flex rounded-2xl px-3 py-2 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 mr-2  fill-white"
          viewBox="0 0 24 24"
        >
          <title>Movies</title>
          <path d="M18,14.5V11A1,1 0 0,0 17,10H16C18.24,8.39 18.76,5.27 17.15,3C15.54,0.78 12.42,0.26 10.17,1.87C9.5,2.35 8.96,3 8.6,3.73C6.25,2.28 3.17,3 1.72,5.37C0.28,7.72 1,10.8 3.36,12.25C3.57,12.37 3.78,12.5 4,12.58V21A1,1 0 0,0 5,22H17A1,1 0 0,0 18,21V17.5L22,21.5V10.5L18,14.5M13,4A2,2 0 0,1 15,6A2,2 0 0,1 13,8A2,2 0 0,1 11,6A2,2 0 0,1 13,4M6,6A2,2 0 0,1 8,8A2,2 0 0,1 6,10A2,2 0 0,1 4,8A2,2 0 0,1 6,6Z" />
        </svg>
        Add movie
      </Link>
      <div className="w-full mt-10 lg:mt-0 flex flex-col items-center justify-center gap-3">
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="flex w-[90%] lg:w-[60%] xl:w-[50%] border-2 rounded-xl border-blue-300 relative shadow-md shadow-blue-100 px-4 py-2 justify-between"
          >
            <div>
              <Link href={`/movies/${movie._id}`} className="font-bold min-w-[20%] text-[0.85rem] sm:text-base truncate">
                {movie.title}
              </Link>
              <div className="text-[0.8rem] w-[60vw] overflow-hidden sm:w-[70vw] lg:w-[50vw] xl:w-[40vw] text-gray-400 truncate">
                {movie.description}
              </div>
            </div>
            <div className="flex gap-3 absolute right-4 top-[50%] w-[50%] items-center">
              <DeleteMovieButton id={movie._id}></DeleteMovieButton>
              <Link
                href={`/movies/editMovie/${movie._id}`}
                className="font-bold absolute right-0 flex items-center text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 fill-blue-500"
                  viewBox="0 0 24 24"
                >
                  <title>Edit movie</title>
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

export default MovieList;
