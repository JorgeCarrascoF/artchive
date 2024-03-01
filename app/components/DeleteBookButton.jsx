"use client";
import Router, { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteBookButton = ({ id }) => {
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  const removeBook = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/books?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.refresh();
    } else {
      throw new Error("Error deleting book");
    }
  };

  return (
    <div
      className={`flex absolute right-8 justify-end ${
        deleting ? "w-fit xl:w-[220px]" : "w-6"
      } overflow-x-hidden`}
    >
      {!deleting ? (
        <svg
          onClick={() => {
            setDeleting(true);
          }}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 fill-red-500 cursor-pointer"
          viewBox="0 0 24 24"
        >
          <title>Delete</title>
          <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>
      ) : (
        <div className="bg-[#fcebeb] w-full  xl:w-[215px] rounded-md items-center justify-evenly flex gap-2 px-3 py-2">
          <span className="font-medium w-[110px]  text-red-500 overflow-hidden ">
            Are you sure?
          </span>
          <button
            onClick={() => {
              removeBook();
            }}
            className="bg-red-500 font-medium text-white px-1 rounded-md overflow-hidden"
          >
            Yes
          </button>
          <button
            className="text-red-500 bg-white px-1 rounded-md overflow-hidden font-medium"
            onClick={() => {
              setDeleting(false);
            }}
          >
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteBookButton;
