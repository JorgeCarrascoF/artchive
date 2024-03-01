import EditDeveloperForm from "@/app/components/EditDeveloperForm";
import { getDeveloperByID } from "../../[id]/page";

const EditDeveloper = async ({ params }) => {
    const {developer} = await getDeveloperByID(params.id);

    return <div className="w-full flex justify-center">
        <EditDeveloperForm developerId={params.id} developerName={developer.name} developerNacionality={developer.nacionality}></EditDeveloperForm>
    </div>
}

export default EditDeveloper;