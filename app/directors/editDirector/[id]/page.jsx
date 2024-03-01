import EditDirectorForm from "@/app/components/EditDirectorForm";
import { getDirectorByID } from "../../[id]/page";

const EditDirector = async ({ params }) => {
  const { director } = await getDirectorByID(params.id);

  return <div className="w-full flex justify-center">
    <EditDirectorForm
        directorID={params.id}
        first_name={director.first_name}
        family_name={director.family_name}
        directorNacionality={director.nacionality}
        date_of_birth={director.date_of_birth}
        date_of_death={director.date_of_death}
    ></EditDirectorForm>
  </div>;
};

export default EditDirector;