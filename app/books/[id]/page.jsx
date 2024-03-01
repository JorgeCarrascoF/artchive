import Link from "next/link";

export const getBookByID = async (id) => {
  try {
    const res = await fetch(`/api/books/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error fetching book");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading book", error);
  }
};

const BookPage = async ({ params }) => {
  const { book } = await getBookByID(params.id);

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl  flex items-center font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[25px] mb-1 mr-2"
          viewBox="0 0 24 24"
        >
          <title>Books</title>
          <path d="M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M11 7.5C9.64 6.9 7.84 6.5 6.5 6.5C5.3 6.5 4.1 6.65 3 7V18.5C4.1 18.15 5.3 18 6.5 18C7.84 18 9.64 18.4 11 19V7.5M13 19C14.36 18.4 16.16 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C16.16 6.5 14.36 6.9 13 7.5V19Z" />
        </svg>
        {book.title} ({book.year})
      </h1>
      <h3>
        ISBN: <span className="text-blue-400 font-medium">{book.ISBN}</span>
      </h3>
      <div className="flex items-center">
        <Link href={`/authors/${book.author._id}`}>
          <span className="flex bg-gray-200 px-4 py-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 mr-2"
              viewBox="0 0 24 24"
            >
              <title>Author</title>
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
            </svg>
            {book.author.first_name} {book.author.family_name}
          </span>
        </Link>

        <span className="flex border bg-blue-400 text-white font-semibold px-3 py-1 rounded-lg m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 fill-white mr-2"
            viewBox="0 0 24 24"
          >
            <title>Genre</title>
            <path d="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z" />
          </svg>
          {book.book_genre.name}
        </span>
      </div>
      <div className="border my-2 p-3 mb-3 w-[400px] border-blue-400 rounded-lg">
        <span className="font-semibold">Summary</span>
        <p className="mt-2 text-justify max-w-[100%] break-words max-h-[400px] overflow-y-auto">{book.description}</p>
      </div>
    </div>
  );
};

export default BookPage;
