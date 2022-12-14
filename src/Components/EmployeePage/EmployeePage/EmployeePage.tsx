import { EmployeeTableZone } from "../EmployeeTable/EmployeeTableZone";
import "./EmployeePage.css";

const EmployeePage = () => {
    return (
        <main>
            <section className="employeeTableContainer">
                <div id="employee-div">
                    <h2 className="formTitle tableTitle">Current Employees</h2>
                    <table id="employee-table" className="display"></table>
                </div>

                <EmployeeTableZone />
            </section>
        </main>
    );
};

export default EmployeePage;
