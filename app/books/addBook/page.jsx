import AddBookForm from "@/app/components/AddBookForm";
import { getAuthors } from "@/app/components/AuthorsList";
import { getBookGenres } from "@/app/components/BookGenreList";

const addBook = async () => {
  const { authors } = await getAuthors();
  const { bookGenres } = await getBookGenres();
  
  return (
    <div className="w-full flex justify-center items-center">
      <AddBookForm authors={authors} genres={bookGenres}></AddBookForm>
    </div>
  );
};

export default addBook;
