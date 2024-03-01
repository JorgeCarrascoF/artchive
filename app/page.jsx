import { getAuthors } from "./components/AuthorsList";
import { getBooks } from "./components/BookList";
import { getDevelopers } from "./components/DevelopersList";
import { getDirectors } from "./components/DirectorsList";
import { getGames } from "./components/GamesList";
import { getBookGenres } from "./components/BookGenreList";
import { getMovies } from "./components/MovieList";
import { getMovieGenres } from "./components/MovieGenreList";
import { getGameGenres } from "./components/GamesGenresList";

export default async function Home() {
  const { books } = await getBooks();
  const { movies } = await getMovies();
  const { videogames } = await getGames();

  const { authors } = await getAuthors();
  const { directors } = await getDirectors();
  const { developers } = await getDevelopers();

  const { bookGenres } = await getBookGenres();
  const { movieGenres } = await getMovieGenres();
  const { gameGenres } = await getGameGenres();

  return (
    <div className="flex justify-center tracking-wide items-center flex-col">
      <h1 className="text-3xl w-[60%] sm:w-[35%] lg:w-[20%] relative text-right mr-[60px] mt-16">
        Welcome to <br />{" "}
        <span className="text-blue-400 text-5xl font-semibold">Artchive</span>
        <svg
          className="absolute bottom-0 right-0 translate-x-[105px]  w-[120px] h-[120px] ml-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 482 483"
        >
          <title>artchive</title>
          <path
            className="fill-transparent"
            d="M9.44,248.16c0-74.7.48-149.41-.43-224.1C8.84,10.23,12.58,8.46,25.33,8.5q224.65.78,449.31,0C487.29,8.46,491.06,10.1,491,24q-1,226.47-.06,453c.05,12.63-3.58,14.34-15.06,14.31q-225.84-.62-451.7.21c-15.24.08-15.06-5.41-15-16.85C9.67,399.15,9.44,323.66,9.44,248.16ZM173.73,299l-5.16,5.66c-25.95-47.17-14-94.25,1.27-140.84,19.16-58.51-11.62-97.19-79-95.26,29.4,40.46,25,86.5,24.14,131.49-1.25,66.36,4.35,128.76,83.58,162-12.16,0-16.19.34-20.15-.06C156.82,359.89,143.06,362,143,391c-.05,29.72,14.94,29,35.94,28.68,54.51-.75,109,0,163.55-.41,14.72-.1,34.14,6.44,32.91-20.88-.91-20.05,4.3-42.81-37-34.91C375.51,339.05,373,300,394.55,274.85c7.9-9.21,26.57-11.1,12.94-29.22-12.11-16.1-28.18-21.49-46.6-14.58-26.57,10-32.45,33.52-33.63,58.21-1.37,28.85-14.8,47.28-44.51,43-30.08-4.36-36.43-27.62-30.94-54.47,5.28-25.87,23.41-44.83,37.07-66.22,28.38-44.45,24.11-89.61-.55-133.33-22-39-57-58.4-106.15-59.39,30.9,47,18.83,91.42.86,136.39C164.4,201.87,154.26,249.66,173.73,299Zm87.13,130c-25.54,0-51.18,1.37-76.59-.44-20.2-1.44-22.62,8.32-20.91,23.93,1.65,15-7.14,35,22,34.11,43.86-1.32,87.8-.92,131.69-.1,23,.42,40.29,2.54,40.16-31.58-.12-35.09-21.26-25.12-38.89-25.77C299.2,428.43,280,429,260.86,429ZM259.45,293.8c1.75,17.58,10.67,29.31,28.5,29.58s28.93-10.63,28.83-28.25-11.39-28.08-29.15-28.05C270.74,267.11,262.09,278,259.45,293.8Z"
            transform="translate(-9 -8.5)"
          />
          <path
            className="fill-[#62a6f9]"
            d="M173.73,299c-19.47-49.36-9.33-97.15,9.31-143.8,18-45,30-89.36-.86-136.39,49.19,1,84.16,20.4,106.15,59.39,24.66,43.72,28.93,88.88.55,133.33-13.66,21.39-31.79,40.35-37.07,66.22-5.49,26.85.86,50.11,30.94,54.47,29.71,4.3,43.14-14.13,44.51-43,1.18-24.69,7.06-48.24,33.63-58.21,18.42-6.91,34.49-1.52,46.6,14.58,13.63,18.12-5,20-12.94,29.22-21.6,25.18-19,64.2-56.19,88.62,41.34-7.9,36.13,14.86,37,34.91,1.23,27.32-18.19,20.78-32.91,20.88-54.52.4-109-.34-163.55.41-21,.29-36,1-35.94-28.68.06-29,13.82-31.1,35.45-28.95,4,.4,8,.06,20.15.06-79.23-33.27-84.83-95.67-83.58-162,.85-45,5.26-91-24.14-131.49,67.34-1.93,98.12,36.75,79,95.26-15.25,46.59-27.22,93.67-1.27,140.84,12.6,28,30.32,50.2,63,55.45C205.41,346.11,189.69,322.45,173.73,299Z"
            transform="translate(-9 -8.5)"
          />
          <path
            className="fill-[#60a4f9]"
            d="M260.86,429c19.16,0,38.34-.54,57.47.15,17.63.65,38.77-9.32,38.89,25.77.13,34.12-17.19,32-40.16,31.58-43.89-.82-87.83-1.22-131.69.1-29.15.87-20.36-19.1-22-34.11-1.71-15.61.71-25.37,20.91-23.93C209.68,430.34,235.32,429,260.86,429Z"
            transform="translate(-9 -8.5)"
          />
          <path
            className="fill-[#65a7f9]"
            d="M259.45,293.8c2.64-15.83,11.29-26.69,28.18-26.72,17.76,0,29,10.44,29.15,28.05S305.67,323.66,288,323.38,261.2,311.38,259.45,293.8Z"
            transform="translate(-9 -8.5)"
          />
          <path
            className="fill-transparent"
            d="M173.73,299c16,23.43,31.68,47.09,57.82,61.11-32.66-5.25-50.38-27.42-63-55.45Z"
            transform="translate(-9 -8.5)"
          />
        </svg>
      </h1>
      <span className="italic mt-4 font-light text-lg text-gray-400">
        Keep it simple. Keep it organized.
      </span>
      <p className="mt-[20px] w-[80%] text-lg lg:w-[50%] xl:text-xl text-justify">
        <span className="text-blue-400 font-semibold">Artchive</span> is a
        public app to register books, movies and games. The primary goal is to
        provide users with a user-friendly platform for cataloging and managing
        their book, movie, and game collections.
      </p>
      <span className="mt-[20px] w-[80%] lg:w-[60%] text-blue-400 font-medium text-end">
        It&apos;s a small project to practise on Full Stack development.
      </span>
      <span className="mt-10 w-[80%] lg:w-[60%] xl:text-xl  text-justify">
        Right now, the app counts with:
      </span>
      <div className="mt-2 w-[85%] sm:w-[50%] lg:w-[35%] xl:w-[30%] text-sm lg:text-base xl:text-lg flex flex-col items-start ml-10 sm:ml-0">
        <span className="">
          {" "}
          <span className="text-blue-400 font-bold">
            {books.length}
          </span> books,{" "}
          <span className="text-blue-400 font-bold">{authors.length}</span>{" "}
          authors and{" "}
          <span className="text-blue-400 font-bold">{bookGenres.length}</span>{" "}
          book genres.
        </span>
        <span className="">
          {" "}
          <span className="text-blue-400 font-bold">{movies.length}</span>{" "}
          movies,{" "}
          <span className="text-blue-400 font-bold">{directors.length}</span>{" "}
          directors and{" "}
          <span className="text-blue-400 font-bold">{movieGenres.length}</span>{" "}
          movie genres.
        </span>
        <span className="">
          {" "}
          <span className="text-blue-400 font-bold">
            {videogames.length}
          </span>{" "}
          games,{" "}
          <span className="text-blue-400 font-bold">{developers.length}</span>{" "}
          developers and{" "}
          <span className="text-blue-400 font-bold">{gameGenres.length}</span>{" "}
          game genres.
        </span>
      </div>
    </div>
  );
}
