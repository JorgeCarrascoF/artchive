"use client";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/navigation";

const EditMovieForm = ({
  movieId,
  movieTitle,
  movieDescription,
  movieDuration,
  movieDirector,
  movieGenre,
  movieYear,
  directors,
  genres,
}) => {
  const [title, setTitle] = useState(movieTitle);
  const [description, setDescription] = useState(movieDescription);
  const [duration, setDuration] = useState(movieDuration);
  const [director, setDirector] = useState(movieDirector);
  const [movie_genre, setGenre] = useState(movieGenre);
  const [year, setYear] = useState(movieYear);

  const [wrong, setWrong] = useState(false);

  const router = useRouter();

  useEffect(() => {
    //sometimes the movie year is not being set, so we need to set it again
    setYear(movieYear);
  }, [movieYear]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      title == "" ||
      duration == 0 ||
      director == "" ||
      movie_genre == "" ||
      year == 0
    ) {
      setWrong(true);
    } else {
      setWrong(false);
      try {
        const res = await fetch(`//artchive.vercel.app//api/movies/${movieId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            duration,
            year,
            director,
            movie_genre,
          }),
        });

        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        router.push('/movies');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] sm:w-[60%] lg:w-[65%] xl:w-[50%] border border-blue-400 rounded-lg py-10 flex flex-col items-center gap-5"
    >
      <div className="w-[90%] lg:w-[70%] mt-5 flex justify-between">
        <label className={`${wrong && title == "" && "text-red-500"}`}>
          Movie title
        </label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          defaultValue={title}
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
        />
      </div>
      <div className="w-[90%] lg:w-[70%] mt-5 flex justify-between">
        <label>Description</label>
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          defaultValue={description}
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
        />
      </div>
      <div className="w-[90%] lg:w-[70%] mt-5 flex justify-between">
        <label>Duration</label>
        <input
          type="number"
          onChange={(e) => {
            setDuration(e.target.value);
          }}
          defaultValue={duration}
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
        />
      </div>
      <div className="w-[90%] lg:w-[70%] mt-5 flex justify-between">
        <label className={`${wrong && director == "" && "text-red-500"}`}>
          Director
        </label>
        <select
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
          onChange={(e) => setDirector(e.target.value)}
        >
          {directors.map((director) => (
            <option
              key={director._id}
              selected={director._id == movieDirector}
              value={director._id}
            >
              {director.first_name} {director.family_name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-[90%] lg:w-[70%] mt-5 flex justify-between">
        <label className={`${wrong && movie_genre == "" && "text-red-500"}`}>
          Genre
        </label>
        <select
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
          onChange={(e) => setGenre(e.target.value)}
        >
          {genres.map((genre) => (
            <option
              key={genre._id}
              selected={genre._id == movieGenre}
              value={genre._id}
            >
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-[90%] lg:w-[70%] mt-5 flex justify-between">
        <label>Year</label>
        <input
          type="number"
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
          onChange={(e) => setYear(e.target.value)}
          defaultValue={year}
        />
      </div>
      {wrong && (
        <p className="text-red-500 w-[80%] text-center">
          One or several fields required are empty. Please fill them.
        </p>
      )}
      <button type="submit" className="bg-blue-400 px-2 py-1 rounded-lg text-white mt-4">Edit movie</button>
    </form>
  );
};

export default EditMovieForm;
