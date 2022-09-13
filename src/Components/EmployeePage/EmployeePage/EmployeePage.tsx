import { Link } from "react-router-dom";
import { EmployeeTableZone } from "../EmployeeTable/EmployeeTableZone";
import "./EmployeePage.css";

const EmployeePage = () => {
    return (
        <main>
            <div></div>
            <div id="employee-div">
                <h2 className="formTitle tableTitle">Current Employees</h2>
                <table id="employee-table" className="display"></table>
            </div>

            <EmployeeTableZone />
        </main>
    );
};

export default EmployeePage;
