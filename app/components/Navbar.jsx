import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full max-h-16 flex justify-evenly fixed top-0 z-30 bg-blue-400 py-4 items-center">
      <div className="w-[85px] xl:w-[150px]  rounded-t-xl py-4 flex items-center justify-center">
        <Link className="font-bold flex items-center  text-white" href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 mr-1 fill-white"
            viewBox="0 0 24 24"
          >
            <title>Home</title>
            <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
          </svg>
          <span className="text-sm xl:text-base">Home</span>
        </Link>
      </div>
      <div className="group relative w-[80px] xl:w-[150px]  rounded-t-xl py-2">
        <Link
          className="font-bold flex  justify-center text-white"
          href={"/books"}
        >
          <span className="px-2 flex items-center text-sm xl:text-base w-[90px] xl:w-[150px] justify-center py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 mr-1 xl:mr-2 fill-white"
              viewBox="0 0 24 24"
            >
              <title>Books</title>
              <path d="M12 21.5C10.65 20.65 8.2 20 6.5 20C4.85 20 3.15 20.3 1.75 21.05C1.65 21.1 1.6 21.1 1.5 21.1C1.25 21.1 1 20.85 1 20.6V6C1.6 5.55 2.25 5.25 3 5C4.11 4.65 5.33 4.5 6.5 4.5C8.45 4.5 10.55 4.9 12 6C13.45 4.9 15.55 4.5 17.5 4.5C18.67 4.5 19.89 4.65 21 5C21.75 5.25 22.4 5.55 23 6V20.6C23 20.85 22.75 21.1 22.5 21.1C22.4 21.1 22.35 21.1 22.25 21.05C20.85 20.3 19.15 20 17.5 20C15.8 20 13.35 20.65 12 21.5M11 7.5C9.64 6.9 7.84 6.5 6.5 6.5C5.3 6.5 4.1 6.65 3 7V18.5C4.1 18.15 5.3 18 6.5 18C7.84 18 9.64 18.4 11 19V7.5M13 19C14.36 18.4 16.16 18 17.5 18C18.7 18 19.9 18.15 21 18.5V7C19.9 6.65 18.7 6.5 17.5 6.5C16.16 6.5 14.36 6.9 13 7.5V19Z" />
            </svg>
            Books
          </span>
        </Link>
        <div className=" flex-col items-center w-[85px] xl:w-[150px] left-0 z-20 pb-3 hidden group-hover:absolute rounded-b-xl gap-3 my-2 group-hover:flex bg-blue-400">
          <Link href={"/authors"}>
            <span className="px-[8px] xl:text-base flex items-center text-sm w-[85px] xl:w-[150px] justify-between xl:justify-center py-2 hover:fill-white hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 xl:mr-2"
                viewBox="0 0 24 24"
              >
                <title>Authors</title>
                <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
              </svg>
              Authors
            </span>
          </Link>
          <Link href={"/bookGenres"}>
            <span className="px-[8px] flex items-center text-sm w-[85px] xl:w-[150px] xl:text-base justify-evenly xl:justify-center py-2 hover:fill-white hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 xl:mr-2"
                viewBox="0 0 24 24"
              >
                <title>Genres</title>
                <path d="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z" />
              </svg>
              Genres
            </span>
          </Link>
        </div>
      </div>
      <div className="group relative w-[85px] xl:w-[150px] rounded-t-xl py-2">
        <Link
          className="font-bold flex justify-center xl:text-base text-white"
          href={"/movies"}
        >
          <span className="px-2 flex items-center text-sm w-[85px] xl:w-[150px] justify-center py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 mr-1 xl:mr-2 fill-white"
              viewBox="0 0 24 24"
            >
              <title>Movies</title>
              <path d="M18,14.5V11A1,1 0 0,0 17,10H16C18.24,8.39 18.76,5.27 17.15,3C15.54,0.78 12.42,0.26 10.17,1.87C9.5,2.35 8.96,3 8.6,3.73C6.25,2.28 3.17,3 1.72,5.37C0.28,7.72 1,10.8 3.36,12.25C3.57,12.37 3.78,12.5 4,12.58V21A1,1 0 0,0 5,22H17A1,1 0 0,0 18,21V17.5L22,21.5V10.5L18,14.5M13,4A2,2 0 0,1 15,6A2,2 0 0,1 13,8A2,2 0 0,1 11,6A2,2 0 0,1 13,4M6,6A2,2 0 0,1 8,8A2,2 0 0,1 6,10A2,2 0 0,1 4,8A2,2 0 0,1 6,6Z" />
            </svg>
            Movies
          </span>
        </Link>
        <div className=" flex-col items-center w-[85px] xl:w-[150px] left-0 z-20 pb-3 hidden group-hover:absolute rounded-b-xl gap-3 my-2 group-hover:flex bg-blue-400">
          <Link href={"/directors"}>
            <span className="px-1 flex items-center text-[0.8rem] w-[85px] xl:w-[150px] justify-evenly xl:justify-center xl:text-base py-2 hover:fill-white hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 mr-1 xl:mr-2"
                viewBox="0 0 24 24"
              >
                <title>Director</title>
                <path d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z" />
              </svg>
              Directors
            </span>
          </Link>
          <Link href={"/movieGenres"}>
            <span className="px-2 flex items-center justify-center text-sm w-[85px] xl:w-[150px] xl:text-base py-2 hover:fill-white hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 mr-1 xl:mr-2"
                viewBox="0 0 24 24"
              >
                <title>Movie genres</title>
                <path d="M18,9H16V7H18M18,13H16V11H18M18,17H16V15H18M8,9H6V7H8M8,13H6V11H8M8,17H6V15H8M18,3V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3H18Z" />
              </svg>
              Genres
            </span>
          </Link>
        </div>
      </div>
      <div className="group relative w-[85px] xl:w-[150px] rounded-t-xl py-2">
        <Link
          className="font-bold flex justify-center text-white"
          href={"/games"}
        >
          <span className="px-2 flex text-sm items-center w-[85px] xl:w-[150px] xl:text-base justify-center py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 mr-1 fill-white"
              viewBox="0 0 24 24"
            >
              <title>Games</title>
              <path d="M7.97,16L5,19C4.67,19.3 4.23,19.5 3.75,19.5A1.75,1.75 0 0,1 2,17.75V17.5L3,10.12C3.21,7.81 5.14,6 7.5,6H16.5C18.86,6 20.79,7.81 21,10.12L22,17.5V17.75A1.75,1.75 0 0,1 20.25,19.5C19.77,19.5 19.33,19.3 19,19L16.03,16H7.97M7,8V10H5V11H7V13H8V11H10V10H8V8H7M16.5,8A0.75,0.75 0 0,0 15.75,8.75A0.75,0.75 0 0,0 16.5,9.5A0.75,0.75 0 0,0 17.25,8.75A0.75,0.75 0 0,0 16.5,8M14.75,9.75A0.75,0.75 0 0,0 14,10.5A0.75,0.75 0 0,0 14.75,11.25A0.75,0.75 0 0,0 15.5,10.5A0.75,0.75 0 0,0 14.75,9.75M18.25,9.75A0.75,0.75 0 0,0 17.5,10.5A0.75,0.75 0 0,0 18.25,11.25A0.75,0.75 0 0,0 19,10.5A0.75,0.75 0 0,0 18.25,9.75M16.5,11.5A0.75,0.75 0 0,0 15.75,12.25A0.75,0.75 0 0,0 16.5,13A0.75,0.75 0 0,0 17.25,12.25A0.75,0.75 0 0,0 16.5,11.5Z" />
            </svg>
            Games
          </span>
        </Link>
        <div className=" flex-col items-center w-[85px] xl:w-[150px] left-0 z-20 pb-3 hidden group-hover:absolute rounded-b-xl gap-3 my-2 group-hover:flex bg-blue-400">
          <Link href={"/developers"}>
            <span className="px-4 flex text-sm items-center w-[85px] xl:w-[150px] justify-center xl:text-base py-2 hover:fill-white hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 mr-1 xl:mr-2"
                viewBox="0 0 24 24"
              >
                <title>Developers</title>
                <path d="M12,12L19.07,19.07C15.17,23 8.83,23 4.93,19.07C1,15.17 1,8.84 4.93,4.93C8.83,1 15.16,1 19.07,4.93L12,12M19,10A2,2 0 0,0 17,12A2,2 0 0,0 19,14A2,2 0 0,0 21,12A2,2 0 0,0 19,10Z" />
              </svg>
              Devs
            </span>
          </Link>
          <Link href={"/gameGenres"}>
            <span className="px-2 flex items-center text-sm w-[85px] xl:w-[150px] xl:text-base justify-center py-2 hover:fill-white hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 mr-1 xl:mr-2"
                viewBox="0 0 24 24"
              >
                <title>Game genre</title>
                <path d="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z" />
              </svg>
              Genres
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
