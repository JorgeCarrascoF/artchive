"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddGameGenreForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [wrong, setWrong] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name == "" || description == "") {
      setWrong(true);
    } else {
      setWrong(false);
      try {
        const res = await fetch("${process.env.NEXT_PUBLIC_URL}/api/gameGenres", {
          method: "POST",
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
      router.push("/gameGenres");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[45%] border border-blue-400 rounded-lg py-10 flex flex-col items-center gap-5"
    >
      <div className="w-[70%] flex justify-between">
        <label className={`${wrong && name == "" && "text-red-500"}`}>
          Name
        </label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border px-2"
        />
      </div>
      <div className="w-[70%] flex justify-between">
        <label className={`${wrong && description == "" && "text-red-500"}`}>
          Description
        </label>
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="border px-2"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-400 px-2 py-1 rounded-lg text-white mt-4"
      >
        Add game genre
      </button>
    </form>
  );
};

export default AddGameGenreForm;
