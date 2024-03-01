"use client";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/navigation";

const EditBookForm = ({
  bookId,
  bookTitle,
  bookISBN,
  bookDescription,
  bookAuthor,
  bookGenre,
  bookYear,
  authors,
  genres,
}) => {
  const [title, setTitle] = useState(bookTitle);
  const [ISBN, setIsbn] = useState(bookISBN);
  const [description, setDescription] = useState(bookDescription);
  const [author, setAuthor] = useState(bookAuthor);
  const [book_genre, setGenre] = useState(bookGenre);
  const [year, setYear] = useState(bookYear);
  const [wrong, setWrong] = useState(false);

  const router = useRouter();

  useEffect(() => {
    //sometimes the bookISBN is not being set, so we need to set it again
    setIsbn(bookISBN);
  }, [bookISBN]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      title == "" ||
      ISBN == "" ||
      author == "" ||
      book_genre == "" ||
      year == ""
    ) {
      setWrong(true);
    } else {
      setWrong(false);
      try {
        const res = await fetch(`${process.env.URL}/api/books/${bookId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            ISBN,
            description,
            author,
            book_genre,
            year,
          }),
        });

        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        router.push("/books");
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
          Book title
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
        <label className={`${wrong && ISBN == "" && "text-red-500"}`}>
          ISBN
        </label>
        <input
          type="text"
          onChange={(e) => {
            setIsbn(e.target.value);
          }}
          defaultValue={ISBN}
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
        <label className={`${wrong && author == "" && "text-red-500"}`}>
          Author
        </label>
        <select
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
          onChange={(e) => setAuthor(e.target.value)}
        >
          {authors.map((author) => (
            <option
              key={author._id}
              selected={author._id == bookAuthor}
              value={author._id}
            >
              {author.first_name} {author.family_name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-[90%] lg:w-[70%] mt-5 flex justify-between">
        <label className={`${wrong && book_genre == "" && "text-red-500"}`}>
          Genre
        </label>
        <select
          className="border rounded-md w-[65%] lg:w-[55%] px-2"
          onChange={(e) => setGenre(e.target.value)}
        >
          {genres.map((genre) => (
            <option
              key={genre._id}
              selected={genre._id == bookGenre}
              value={genre._id}
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
      {wrong && (
        <p className="text-red-500 w-[80%] text-center">
          One or several fields required are empty. Please fill them.
        </p>
      )}
      <button
        type="submit"
        className="bg-blue-400 px-2 py-1 rounded-lg text-white mt-4"
      >
        Edit book
      </button>
    </form>
  );
};

export default EditBookForm;
