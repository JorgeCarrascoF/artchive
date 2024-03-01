export const getGenreByID = async (id) => {
  try {
    const res = await fetch(`//artchive.vercel.app//api/bookGenre/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error fetching genre");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading genre", error);
  }
};

const GenrePage = async ({ params }) => {
  const { bookGenre } = await getGenreByID(params.id);

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-2xl flex items-center font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[25px] mr-2"
          viewBox="0 0 24 24"
        >
          <title>Genres</title>
          <path d="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z" />
        </svg>
        {bookGenre.name}
      </h1>
      <p className="border my-2 p-3 mb-3 w-[400px] border-blue-400 rounded-lgtext-justify rounded-md break-words max-h-[400px] overflow-y-auto">
        {bookGenre.description}
      </p>
    </div>
  );
};

export default GenrePage;
