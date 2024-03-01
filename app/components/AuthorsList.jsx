import Link from "next/link";
import DeleteAuthorButton from "./DeleteAuthorButton";

export const getAuthors = async () => {
  try {
    const res = await fetch("/api/authors", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error fetching authors");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading authors", error);
  }
};

const AuthorList = async () => {
  const { authors } = await getAuthors();

  return (
    <div className="w-full flex  flex-col items-center relative gap-3 justify-center pt-4">
      <Link
        href={"/authors/addAuthor"}
        className="fixed right-5 top-20 lg:items-center w-fit border bg-blue-400 text-white font-semibold flex rounded-2xl px-3 py-2 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 mr-2 fill-white"
          viewBox="0 0 24 24"
        >
          <title>Authors</title>
          <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
        </svg>
        Add author
      </Link>
      <div className="w-full mt-10 lg:mt-0 flex flex-col items-center justify-center gap-3">
        {authors.map((author) => (
          <div
            key={author.id}
            className="flex w-[90%] lg:w-[60%] xl:w-[50%] border-2 rounded-xl border-blue-300 relative shadow-md shadow-blue-100 px-4 py-2 justify-between"
          >
            <div>
              <Link
                href={`/authors/${author._id}`}
                className="font-bold min-w-[20%] text-[0.85rem] sm:text-base truncate"
              >
                {author.first_name} {author.family_name} [{author.nacionality}]
              </Link>
            </div>
            <div className="flex gap-3 absolute right-4 top-[50%] w-[50%] items-center">
              <DeleteAuthorButton id={author._id}></DeleteAuthorButton>
              <Link
                href={`/authors/editAuthor/${author._id}`}
                className="font-bold absolute right-0 flex items-center text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 fill-blue-500"
                  viewBox="0 0 24 24"
                >
                  <title>Edit author</title>
                  <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorList;
