const { default: AddDeveloperForm } = require("@/app/components/AddDeveloperForm")

const addDeveloper = () => {
    return <div className="w-full flex justify-center items-center">
        <AddDeveloperForm></AddDeveloperForm>
    </div>
}

export default addDeveloper;