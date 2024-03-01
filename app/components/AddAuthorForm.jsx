"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddAuthorForm = () => {
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [nacionality, setNacionality] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(undefined);
  const [dateOfDeath, setDateOfDeath] = useState(undefined);

  const [wrong, setWrong] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      firstName == "" ||
      familyName == "" ||
      nacionality == ""
    ) {
      setWrong(true);
    } else {
      setWrong(false);
      try {
        const res = await fetch("/api/authors", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            familyName,
            nacionality,
            dateOfBirth,
            dateOfDeath,
          }),
        });

        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        router.push("/authors");
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
        <label className={`${wrong && firstName == "" && "text-red-500"}`}>
          First name
        </label>
        <input
          type="text"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
        />
      </div>
      <div className="w-[90%] lg:w-[70%] flex justify-between">
        <label className={`${wrong && familyName == "" && "text-red-500"}`}>
          Family name
        </label>
        <input
          type="text"
          onChange={(e) => {
            setFamilyName(e.target.value);
          }}
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
        />
      </div>
      <div className="w-[90%] lg:w-[70%] flex justify-between">
        <label className={`${wrong && nacionality == "" && "text-red-500"}`}>
          Nacionality
        </label>
        <input
          type="text"
          onChange={(e) => {
            setNacionality(e.target.value);
          }}
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
        />
      </div>
      <div className="w-[90%] lg:w-[70%] flex justify-between">
        <label>Date of birth</label>
        <input
          type="number"
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </div>
      <div className="w-[90%] lg:w-[70%] flex justify-between">
        <label>Date of death</label>
        <input
          type="number"
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
          onChange={(e) => setDateOfDeath(e.target.value)}
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
        Add author
      </button>
    </form>
  );
};
export default AddAuthorForm;
