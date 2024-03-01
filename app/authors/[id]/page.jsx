import Link from "next/link";

export const getAuthorByID = async (id) => {
  try {
    const res = await fetch(`//artchive.vercel.app//api/authors/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error fetching author");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading author", error);
  }
};

const getAuthorBooks = async (id) => {
  try {
    const res = await fetch(`//artchive.vercel.app//api/authors/${id}/books`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error fetching books");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading books", error);
  }
};

const AuthorPage = async ({ params }) => {
  const { author } = await getAuthorByID(params.id);
  const { books } = await getAuthorBooks(params.id);

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl flex items-center font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[25px] mr-2"
          viewBox="0 0 24 24"
        >
          <title>Authors</title>
          <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
        </svg>
        {author.first_name} {author.family_name} [{author.nacionality}]
      </h1>
      <span>
        {author.date_of_birth &&
          `(${author.date_of_birth} - ${
            author.date_of_death ? `${author.date_of_death}` : "present"
          })`}
      </span>
      <div className="flex flex-col w-[35%] mt-4">
        Books
        {books.map((book) => (
          <div
            key={book.id}
            className="flex justify-between bg-gray-100 m-1 rounded-xl p-3"
          >
            <Link href={`/books/${book._id}`}>{book.title}</Link>
            <div className="w-[250px] text-right truncate">
              {book.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorPage;
