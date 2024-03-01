"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddMovieForm = ({ directors, movieGenres }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [release_year, setYear] = useState(0);
  const [duration, setDuration] = useState(0);
  const [director, setDirector] = useState("");
  const [movie_genre, setMovieGenre] = useState("");

  const [wrong, setWrong] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      title == "" ||
      director == "" ||
      movie_genre == "" ||
      release_year == 0 ||
      duration == 0
    ) {
      setWrong(true);
    } else {
      setWrong(false);
      try {
        const res = await fetch("${process.env.URL}/api/movies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            release_year,
            duration,
            director,
            movie_genre,
          }),
        });

        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        router.push("/movies");
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
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
        />
      </div>
      <div className="w-[90%] lg:w-[70%] mt-5 flex justify-between">
        <label>Duration</label>
        <input
          type="text"
          onChange={(e) => {
            setDuration(e.target.value);
          }}
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
          <option value="" selected disabled hidden>
            Select director
          </option>
          {directors.map((director) => (
            <option key={director._id} value={director._id}>
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
          onChange={(e) => setMovieGenre(e.target.value)}
        >
          <option value="" selected disabled hidden>
            Select genre
          </option>
          {movieGenres.map((movieGenre) => (
            <option key={movieGenre._id} value={movieGenre._id}>
              {movieGenre.name}
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
        />
      </div>
      {wrong && (
        <p className="text-red-500 w-[80%] text-center">
          One or several fields required are empty. Please fill them.
        </p>
      )}
      <button type="submit" className="bg-blue-400 px-2 py-1 rounded-lg text-white mt-4">Add movie</button>
    </form>
  );
};
export default AddMovieForm;
