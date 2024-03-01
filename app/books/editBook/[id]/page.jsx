import { getBookByID } from "../../[id]/page";
import EditBookForm from "../../../components/EditBookForm";
import { getAuthors } from "@/app/components/AuthorsList";
import { getBookGenres } from "@/app/components/BookGenreList";

const EditBook = async ({ params }) => {
  const { book } = await getBookByID(params.id);
  const { authors } = await getAuthors();
  const { bookGenres } = await getBookGenres();

  return (
    <div className="w-full flex justify-center">
      <EditBookForm
        bookId={params.id}
        bookTitle={book.title}
        bookISBN={book.ISBN}
        bookDescription={book.description}
        bookAuthor={book.author._id}
        bookGenre={book.book_genre._id}
        bookYear={book.year}
        authors={authors}
        genres={bookGenres}
      ></EditBookForm>
    </div>
  );
};

export default EditBook;
