import EditAuthorForm from "@/app/components/EditAuthorForm";
import { getAuthorByID } from "../../[id]/page";

const EditAuthor = async ({ params }) => {
  const { author } = await getAuthorByID(params.id);

  return (
    <div className="w-full flex justify-center">
      <EditAuthorForm
        authorID={params.id}
        first_name={author.first_name}
        family_name={author.family_name}
        authorNacionality={author.nacionality}
        date_of_birth={author.date_of_birth}
        date_of_death={author.date_of_death}
      ></EditAuthorForm>
    </div>
  );
};

export default EditAuthor;
