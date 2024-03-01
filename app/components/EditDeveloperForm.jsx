"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditDeveloperForm = ({
  developerId,
  developerName,
  developerNacionality,
}) => {
  const [name, setName] = useState(developerName);
  const [nacionality, setNacionality] = useState(developerNacionality);

  const [wrong, setWrong] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name == "" || nacionality == "") {
      setWrong(true);
    } else {
      setWrong(false);
      try {
        const res = await fetch(
          `/api/developers/${developerId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              nacionality,
            }),
          }
        );

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
        <label className={`${wrong && nacionality == "" && "text-red-500"}`}>
          Nacionality
        </label>
        <input
          type="text"
          onChange={(e) => {
            setNacionality(e.target.value);
          }}
          defaultValue={nacionality}
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
        Edit developer
      </button>
    </form>
  );
};
export default EditDeveloperForm;
