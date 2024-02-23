import Link from "next/link";

const BookList = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-4">
      <div className="absolute">Add book</div>
      <div className="flex w-[500px] border px-4 py-2 justify-between">
        <div>
          <h2 className="font-bold text-lg">Book Name</h2>
          <div>Book Desc</div>
        </div>
        <div className="flex gap-3">
          <div>Remove</div>
          <Link href={"/editBook/123"}>Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default BookList;
