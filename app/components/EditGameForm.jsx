"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const EditGameForm = ({
  gameId,
  gameTitle,
  gameDescription,
  gameDeveloper,
  gameGenre,
  gamePlatforms,
  gameYear,
  developers,
  genres,
}) => {
  const [title, setTitle] = useState(gameTitle);
  const [description, setDescription] = useState(gameDescription);
  const [developer, setDeveloper] = useState(gameDeveloper);
  const [game_genre, setGenre] = useState(gameGenre);
  const [year, setYear] = useState(gameYear);
  const [platforms, setPlatforms] = useState(gamePlatforms);

  const [wrong, setWrong] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title == "" || developer == "" || game_genre == "" || year == "") {
      setWrong(true);
    } else {
      setWrong(false);
      try {
        const res = await fetch(`/api/games/${gameId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            developer,
            game_genre,
            year,
            platforms,
          }),
        });

        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        router.push("/games");
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
          Game title
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
        <label className={`${wrong && developer == "" && "text-red-500"}`}>
          Developer
        </label>
        <select
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
          onChange={(e) => setDeveloper(e.target.value)}
        >
          <option value="" selected disabled hidden>
            Select developer
          </option>
          {developers.map((developer) => (
            <option
              key={developer._id}
              value={developer._id}
              selected={developer._id == gameDeveloper}
            >
              {developer.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-[90%] lg:w-[70%] mt-5 flex justify-between">
        <label className={`${wrong && game_genre == "" && "text-red-500"}`}>
          Genre
        </label>
        <select
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="" selected disabled hidden>
            Select genre
          </option>
          {genres.map((genre) => (
            <option
              key={genre._id}
              value={genre._id}
              selected={genre._id == gameGenre}
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
      <div className="w-[90%] lg:w-[70%] mt-5 flex justify-between">
        <label
          className={`${wrong && platforms.length == 0 && "text-red-500"}`}
        >
          Platforms
        </label>
        <div className="w-[60%] flex-wrap sm:w-[65%] flex justify-end">
          <div>
            <label htmlFor="PS4" className="mr-1">
              PC
            </label>
            <input
              defaultChecked={platforms.includes("PC")}
              type="checkbox"
              className="mr-3"
              id="PC"
              name="PC"
              value="PC"
              onChange={(e) => {
                if (platforms.includes(e.target.value)) {
                  setPlatforms(
                    platforms.filter((platform) => platform !== e.target.value)
                  );
                } else setPlatforms([...platforms, e.target.value]);
              }}
            />
          </div>
          <div>
            <label htmlFor="Xbox" className="mr-1">
              Xbox
            </label>
            <input
              defaultChecked={platforms.includes("Xbox")}
              type="checkbox"
              id="Xbox"
              className="mr-3"
              name="Xbox"
              value="Xbox"
              onChange={(e) => {
                if (platforms.includes(e.target.value)) {
                  setPlatforms(
                    platforms.filter((platform) => platform !== e.target.value)
                  );
                } else setPlatforms([...platforms, e.target.value]);
              }}
            />
          </div>
          <div>
            <label htmlFor="PS4" className="mr-1">
              PS4
            </label>
            <input
              defaultChecked={platforms.includes("PS4")}
              type="checkbox"
              id="PS4"
              className="mr-3"
              name="PS4"
              value="PS4"
              onChange={(e) => {
                if (platforms.includes(e.target.value)) {
                  setPlatforms(
                    platforms.filter((platform) => platform !== e.target.value)
                  );
                } else setPlatforms([...platforms, e.target.value]);
              }}
            />
          </div>
          <div>
            <label htmlFor="PS5" className="mr-1">
              PS5
            </label>
            <input
              defaultChecked={platforms.includes("PS5")}
              type="checkbox"
              id="PS5"
              className="mr-3"
              name="PS5"
              value="PS5"
              onChange={(e) => {
                if (platforms.includes(e.target.value)) {
                  setPlatforms(
                    platforms.filter((platform) => platform !== e.target.value)
                  );
                } else setPlatforms([...platforms, e.target.value]);
              }}
            />
          </div>
          <div>
            <label htmlFor="Switch" className="mr-1">
              Switch
            </label>
            <input
              defaultChecked={platforms.includes("Switch")}
              type="checkbox"
              id="Switch"
              className="mr-3"
              name="Switch"
              value="Switch"
              onChange={(e) => {
                if (platforms.includes(e.target.value)) {
                  setPlatforms(
                    platforms.filter((platform) => platform !== e.target.value)
                  );
                } else setPlatforms([...platforms, e.target.value]);
              }}
            />
          </div>
        </div>
      </div>
      {wrong && (
        <p className="text-red-500 w-[80%] text-center" >
          One or several fields required are empty. Please fill them.
        </p>
      )}
      <button
        type="submit"
        className="bg-blue-400 px-2 py-1 rounded-lg text-white mt-4"
      >
        Add Game
      </button>
    </form>
  );
};

export default EditGameForm;
