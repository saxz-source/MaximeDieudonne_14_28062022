import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "@reduxjs/toolkit";
import { getFrenchSlashDate } from "../../../Functions/transformDate";
import { Employee } from "../../../Types/Employee";

interface EmployeeTableProps {
    employees: Employee[];
}

export const EmployeeTable = ({ employees }: EmployeeTableProps) => {
    const tableTHs = [
        "First Name", // firstName
        "Last Name",
        "Start Date",
        "Department",
        "Date of Birth",
        "Street",
        "City",
        "State",
        "Zip Code",
    ];

    return (
        <>
            <table className="employeeTable">
                <thead className="employeeTable--header">
                    <tr>
                        {tableTHs.map((th: string) => {
                            return (
                                <th key={nanoid()}>
                                    {" "}
                                    <span>{th} </span>{" "}
                                    <span>
                                        <FontAwesomeIcon icon={faSort} />
                                    </span>{" "}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody className="employeeTable--body">
                    {employees.length > 0 &&
                        employees.map((e: Employee) => {
                            return (
                                <tr
                                    key={nanoid()}
                                    className="employeeTable--line"
                                >
                                    <td> {e.firstName}</td>
                                    <td> {e.lastName}</td>
                                    <td> {getFrenchSlashDate(e.startDate)}</td>
                                    <td> {e.department}</td>
                                    <td> {getFrenchSlashDate(e.birthDate)}</td>
                                    <td> {e.adress.street}</td>
                                    <td> {e.adress.city}</td>
                                    <td> {e.adress.state}</td>
                                    <td> {e.adress.zipCode}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            {employees.length < 1 && <p> Aucun employee n'est enregistré</p>}
        </>
    );
};

export default EmployeeTable;
