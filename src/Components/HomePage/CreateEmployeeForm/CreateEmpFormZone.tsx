import CreateEmployeeForm from "./CreateEmployeeForm";
import "./CreateEmployeeForm.css"

const CreateEmpFormZone = () => {
    return (
        <div>
            <div className="formContainer">
                <h2 className="formTitle">Create Employee</h2>
                <CreateEmployeeForm />
            </div>
        </div>
    );
};

export default CreateEmpFormZone;
