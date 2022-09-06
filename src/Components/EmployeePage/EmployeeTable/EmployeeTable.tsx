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

    const data = {
        headers: [tableTHs],
        employees: employees,
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {tableTHs.map((th: string) => {
                            return <th key={nanoid()}> {th} </th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 &&
                        employees.map((e: Employee) => {
                            return (
                                <tr key={nanoid()}>
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
        </div>
    );
};

export default EmployeeTable;
