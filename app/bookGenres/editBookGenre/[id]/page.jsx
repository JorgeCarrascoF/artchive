import { getGenreByID } from "../../[id]/page";
import EditBookGenreForm from "@/app/components/EditBookGenreForm";

const EditBookGenre = async ({ params }) => {
    const {id} = params;
    const {bookGenre} = await getGenreByID(id);

    return (
    <div className="w-full flex justify-center">
      <EditBookGenreForm id={id} bookGenreName={bookGenre.name}
      bookGenreDescription={bookGenre.description}></EditBookGenreForm>
    </div>
  );
};

export default EditBookGenre;
