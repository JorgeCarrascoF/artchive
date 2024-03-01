import Link from "next/link";
import DeleteDirectorButton from "./DeleteDirectorButton";

export const getDirectors = async () => {
  try {
    const res = await fetch("//artchive.vercel.app//api/directors", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error fetching directors");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading directors", error);
  }
};

const DirectorList = async () => {
  const { directors } = await getDirectors();

  return (
    <div className="w-full flex  flex-col items-center relative gap-3 justify-center pt-4">
      <Link
        href={"/directors/addDirector"}
        className="fixed right-5 top-20 lg: items-center w-fit border bg-blue-400 text-white font-semibold flex rounded-2xl px-3 py-2 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 fill-white mr-2"
          viewBox="0 0 24 24"
        >
          <title>Director</title>
          <path d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z" />
        </svg>
        Add director
      </Link>
      <div className="w-full mt-10 lg:mt-0 flex flex-col items-center justify-center gap-3">
        {directors.map((director) => (
          <div
            key={director.id}
            className="flex w-[90%] lg:w-[60%] xl:w-[50%] border-2 rounded-xl border-blue-300 relative shadow-md shadow-blue-100 px-4 py-2 justify-between"
          >
            <div>
              <Link href={`/directors/${director._id}`} className="font-bold min-w-[20%] text-[0.85rem] sm:text-base truncate">
                {director.first_name} {director.family_name} [
                {director.nacionality}]
              </Link>
            </div>
            <div className="flex gap-3 absolute right-4 top-[50%] w-[50%] items-center">
              <DeleteDirectorButton id={director._id}></DeleteDirectorButton>
              <Link
                href={`/directors/editDirector/${director._id}`}
                className="font-bold absolute right-0 flex items-center text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 fill-blue-500"
                  viewBox="0 0 24 24"
                >
                  <title>Edit director</title>
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

export default DirectorList;
