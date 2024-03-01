"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditBookGenreForm = ({ id, bookGenreName, bookGenreDescription }) => {
  const [name, setName] = useState(bookGenreName);
  const [description, setDescription] = useState(bookGenreDescription);

  const [wrong, setWrong] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name == "" || description == "") {
      setWrong(true);
    } else {
      setWrong(false);
      try {
        const res = await fetch(`http://localhost:3000/api/bookGenre/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            description,
          }),
        });

        if (!res.ok) {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
      router.push("/bookGenres");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] sm:w-[60%] lg:w-[65%] xl:w-[50%] border border-blue-400 rounded-lg py-10 flex flex-col items-center gap-5"
    >
      <div className="w-[90%] lg:w-[70%] mt-5 flex justify-between">
        <label className={`${wrong && name == "" && "text-red-500"}`}>
          Name
        </label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          defaultValue={name}
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
        />
      </div>
      <div className="w-[90%] lg:w-[70%] mt-5 flex justify-between">
        <label className={`${wrong && description == "" && "text-red-500"}`}>
          Description
        </label>
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          defaultValue={description}
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
        />
      </div>
      {wrong && (
        <p className="text-red-500 w-[80%] text-center">
          One or several fields required are empty. Please fill them.
        </p>
      )}
      <button
        type="submit"
        className="bg-blue-400 px-2 py-1 rounded-lg text-white mt-4"
      >
        Edit genre
      </button>
    </form>
  );
};

export default EditBookGenreForm;
