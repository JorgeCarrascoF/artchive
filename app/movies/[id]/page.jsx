import Link from "next/link";

export const getMovieByID = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/movies/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error fetching movie");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading movie", error);
  }
};

const MoviePage = async ({ params }) => {
  const { movie } = await getMovieByID(params.id);

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl flex items-center font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[25px] mb-1 mr-2"
          viewBox="0 0 24 24"
        >
          <title>Movies</title>
          <path d="M18,14.5V11A1,1 0 0,0 17,10H16C18.24,8.39 18.76,5.27 17.15,3C15.54,0.78 12.42,0.26 10.17,1.87C9.5,2.35 8.96,3 8.6,3.73C6.25,2.28 3.17,3 1.72,5.37C0.28,7.72 1,10.8 3.36,12.25C3.57,12.37 3.78,12.5 4,12.58V21A1,1 0 0,0 5,22H17A1,1 0 0,0 18,21V17.5L22,21.5V10.5L18,14.5M13,4A2,2 0 0,1 15,6A2,2 0 0,1 13,8A2,2 0 0,1 11,6A2,2 0 0,1 13,4M6,6A2,2 0 0,1 8,8A2,2 0 0,1 6,10A2,2 0 0,1 4,8A2,2 0 0,1 6,6Z" />
        </svg>
        {movie.title}
      </h1>
      <div className="flex items-center">
        <Link href={`/directors/${movie.director._id}`}>
          <span className="flex items-center bg-gray-200 px-4 py-2 rounded-lg">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 mr-2"
                viewBox="0 0 24 24"
              >
                <title>Director</title>
                <path d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z" />
              </svg>
            {movie.director.first_name} {movie.director.family_name}
          </span>
        </Link>

        <span className="flex items-center border bg-blue-400 text-white font-semibold px-3 py-2 rounded-lg m-2">
        <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 mr-2 fill-white"
                viewBox="0 0 24 24"
              >
                <title>Movie genres</title>
                <path d="M18,9H16V7H18M18,13H16V11H18M18,17H16V15H18M8,9H6V7H8M8,13H6V11H8M8,17H6V15H8M18,3V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3H18Z" />
              </svg>
          {movie.movie_genre.name}
        </span>
      </div>
      <div className="border my-2 p-3 mb-3 w-[400px] border-blue-400 rounded-lg">
        <span className="font-semibold">Summary</span>
        <p className="mt-2 text-justify max-w-[100%] break-words max-h-[400px] overflow-y-auto">{movie.description}</p>
      </div>
    </div>
  );
};

export default MoviePage;
