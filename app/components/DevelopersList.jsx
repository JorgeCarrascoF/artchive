import Link from "next/link";
import DeleteDeveloperButton from "./DeleteDeveloperButton";

export const getDevelopers = async () => {
  try {
    const res = await fetch("/api/developers", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error fetching developers");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading developers", error);
  }
};

const DeveloperList = async () => {
  const { developers } = await getDevelopers();

  return (
    <div className="w-full flex  flex-col items-center relative gap-3 justify-center pt-4">
      <Link
        href={"/developers/addDeveloper"}
        className="fixed right-5 top-20 lg: items-center w-fit border bg-blue-400 text-white font-semibold flex rounded-2xl px-3 py-2 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 fill-white mr-2"
          viewBox="0 0 24 24"
        >
          <title>Developers</title>
          <path d="M12,12L19.07,19.07C15.17,23 8.83,23 4.93,19.07C1,15.17 1,8.84 4.93,4.93C8.83,1 15.16,1 19.07,4.93L12,12M19,10A2,2 0 0,0 17,12A2,2 0 0,0 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10Z" />
        </svg>
        Add developer
      </Link>
      <div className="w-full mt-10 lg:mt-0 flex flex-col items-center justify-center gap-3">
        {developers.map((developer) => (
          <div
            key={developer._id}
            className="flex w-[90%] lg:w-[60%] xl:w-[50%] border-2 rounded-xl border-blue-300 relative shadow-md shadow-blue-100 px-4 py-2 justify-between"
          >
            <div>
              <Link href={`/developers/${developer._id}`} className="font-bold min-w-[20%] text-[0.85rem] sm:text-base truncate">
                {developer.name} [{developer.nacionality}]
              </Link>
            </div>
            <div className="flex gap-3 absolute right-4 top-[50%] w-[50%] items-center">
              <DeleteDeveloperButton id={developer._id}></DeleteDeveloperButton>
              <Link
                href={`/developers/editDeveloper/${developer._id}`}
                className="font-bold absolute right-0 flex items-center text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 fill-blue-500"
                  viewBox="0 0 24 24"
                >
                  <title>Edit developer</title>
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

export default DeveloperList;
