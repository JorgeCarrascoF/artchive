"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddBookForm = ({ authors, genres }) => {
  const [title, setTitle] = useState("");
  const [ISBN, setIsbn] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [book_genre, setGenre] = useState("");
  const [year, setYear] = useState(0);

  const [wrong, setWrong] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(title == '' || ISBN == '' || author == '' || book_genre == '' || year == ''){
      setWrong(true);
    }
    else {
      setWrong(false);
      try {
        console.log({title, ISBN, description, author, book_genre, year})
        const res = await fetch("http://https://artchive.vercel.app//api/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({title, ISBN, description, author, book_genre, year})
        })

        if(!res.ok){
          throw new Error('Something went wrong')
        }
        router.push('/books');
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
        <label className={`${wrong && title == '' && 'text-red-500' }`}>Book title</label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
        />
      </div>
      <div className="w-[90%] lg:w-[70%] flex justify-between">
        <label className={`${wrong && ISBN == '' && 'text-red-500' }`}>ISBN</label>
        <input
          type="text"
          onChange={(e) => {
            setIsbn(e.target.value);
          }}
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
        />
      </div>
      <div className="w-[90%] lg:w-[70%] flex justify-between">
        <label>Description</label>
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
        />
      </div>
      <div className="w-[90%] lg:w-[70%] flex justify-between">
        <label className={`${wrong && author == '' && 'text-red-500' }`}>Author</label>
        <select className="w-[65%] lg:w-[55%] border rounded-md px-1" onChange={(e) => setAuthor(e.target.value)}>
          <option value="" selected disabled hidden>
            Select author
          </option>
          {authors.map((author) => (
            <option key={author._id} value={author._id}>
              {author.first_name} {author.family_name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-[90%] lg:w-[70%] flex justify-between">
        <label className={`${wrong && book_genre == '' && 'text-red-500' }`}>Genre</label>
        <select className="w-[65%] lg:w-[55%] border rounded-md px-1" onChange={(e) => setGenre(e.target.value)}>
          <option value="" selected disabled hidden>
            Select genre
          </option>
          {genres.map((genre) => (
            <option key={genre._id} value={genre._id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-[90%] lg:w-[70%] flex justify-between">
        <label>Year</label>
        <input
          type="number"
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      {wrong && <p className="text-red-500 w-[80%] text-center">One or several fields required are empty. Please fill them.</p>}
      <button type="submit" className="bg-blue-400 px-2 py-1 rounded-lg text-white mt-4">Add book</button>
    </form>
  );
};
export default AddBookForm;
