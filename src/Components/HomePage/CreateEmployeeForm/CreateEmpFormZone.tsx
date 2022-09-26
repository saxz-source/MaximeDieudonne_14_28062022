import CreateEmployeeForm from "./CreateEmployeeForm";
import "./CreateEmployeeForm.css"

interface CreateEmpFormZoneProps {
    handleModalOpening : (isOpen:boolean, isSuccess:boolean)=> void
}


const CreateEmpFormZone = ({handleModalOpening}: CreateEmpFormZoneProps)  => {
    return (
        <div>
            <div className="formContainer">
                <h2 className="formTitle">Create Employee</h2>
                <CreateEmployeeForm handleModalOpening={handleModalOpening} />
            </div>
        </div>
    );
};

export default CreateEmpFormZone;
