"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditAuthorForm = ({
  authorID,
  first_name,
  family_name,
  authorNacionality,
  date_of_birth,
  date_of_death,
}) => {
  const [firstName, setFirstName] = useState(first_name);
  const [familyName, setFamilyName] = useState(family_name);
  const [nacionality, setNacionality] = useState(authorNacionality);
  const [dateOfBirth, setDateOfBirth] = useState(date_of_birth);
  const [dateOfDeath, setDateOfDeath] = useState(date_of_death);

  const [wrong, setWrong] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName == "" || familyName == "" || nacionality == "") {
      setWrong(true);
    } else {
      setWrong(false);
      try {
        const res = await fetch(
          `${process.env.URL}/api/authors/${authorID}`,
          {
            method: "PUT",
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
          }
        );

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
      <div className="w-[70%] flex justify-between">
        <label className={`${wrong && firstName == "" && "text-red-500"}`}>
          First name
        </label>
        <input
          type="text"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          defaultValue={firstName}
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
        />
      </div>
      <div className="w-[70%] flex justify-between">
        <label className={`${wrong && familyName == "" && "text-red-500"}`}>
          Family name
        </label>
        <input
          type="text"
          onChange={(e) => {
            setFamilyName(e.target.value);
          }}
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
          defaultValue={familyName}
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
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
          defaultValue={nacionality}
        />
      </div>
      <div className="w-[70%] flex justify-between">
        <label>Date of birth</label>
        <input
          type="number"
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
          onChange={(e) => setDateOfBirth(e.target.value)}
          defaultValue={dateOfBirth}
        />
      </div>
      <div className="w-[70%] flex justify-between">
        <label>Date of death</label>
        <input
          type="number"
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
          onChange={(e) => setDateOfDeath(e.target.value)}
          defaultValue={dateOfDeath}
        />
      </div>
      {wrong && (
        <p className="text-red-500  w-[80%] text-center">
          One or several fields required are empty. Please fill them.
        </p>
      )}
      <button
        type="submit"
        className="bg-blue-400 px-2 py-1 rounded-lg text-white mt-4"
      >
        Edit author
      </button>
    </form>
  );
};
export default EditAuthorForm;
