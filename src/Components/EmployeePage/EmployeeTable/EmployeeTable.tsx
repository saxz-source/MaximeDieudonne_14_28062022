import { nanoid } from "@reduxjs/toolkit";
import { getFrenchSlashDate } from "../../../Functions/transformDate";
import { Employee } from "../../../Types/Employee";
import { TableParams } from "../../../Types/TableParams";
import TableHeaderTH from "./TableHeaderTH";

interface EmployeeTableProps {
    employees: Employee[];
    tableParams: TableParams;
}

export const EmployeeTable = ({
    employees,
    tableParams,
}: EmployeeTableProps) => {
    const tableTHs = [
        { text: "First Name", name: "firstName" },
        { text: "Last Name", name: "lastName" },
        { text: "Start Date", name: "startDate" },
        { text: "Department", name: "department" },
        { text: "Date of Birth", name: "birthDate" },
        { text: "Street", name: "street" },
        { text: "City", name: "city" },
        { text: "State", name: "state" },
        { text: "ZipCode", name: "zipCode" },
    ];

    return (
        <>
            <table className="employeeTable">
                <thead className="employeeTable--header">
                    <tr>
                        {tableTHs.map(
                            (
                                th: { text: string; name: string },
                                index: number
                            ) => {
                                return (
                                    <TableHeaderTH
                                        key={nanoid()}
                                        title={th}
                                        sortedColumn={tableParams.sortedColumn}
                                    />
                                );
                            }
                        )}
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
                                    <td> {e.street}</td>
                                    <td> {e.city}</td>
                                    <td> {e.state}</td>
                                    <td> {e.zipCode}</td>
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
