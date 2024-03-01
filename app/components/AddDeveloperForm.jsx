"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddDeveloperForm = () => {
  const [name, setName] = useState("");
  const [nacionality, setNacionality] = useState("");

  const [wrong, setWrong] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name == "" ||
      nacionality == ""
    ) {
      setWrong(true);
    } else {
      setWrong(false);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/developers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            nacionality,
          }),
        });

        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        router.push("/developers");
      } catch (error) {
        console.log(error);
      }
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
        <label className={`${wrong && nacionality == "" && "text-red-500"}`}>
          Nacionality
        </label>
        <input
          type="text"
          onChange={(e) => {
            setNacionality(e.target.value);
          }}
          className="border px-2"
        />
      </div>
      {wrong && (
        <p className="text-red-500">
          One or several fields required are empty. Please fill them.
        </p>
      )}
      <button
        type="submit"
        className="border border-blue-400 px-2 py-1 rounded-xl mt-2"
      >
        Add developer
      </button>
    </form>
  );
};
export default AddDeveloperForm;
