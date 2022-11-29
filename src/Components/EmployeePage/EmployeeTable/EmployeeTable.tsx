import { nanoid } from "@reduxjs/toolkit";
import { getFrenchSlashDate } from "../../../Functions/transformDate";
import { Employee } from "../../../Types/Employee";
import { TableParams } from "../../../Types/TableParams";
import EmployeeTableTD from "./EmployeeTableTD";
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
        { text: "Date of Birth", name: "dateOfBirth" },
        { text: "Street", name: "street" },
        { text: "City", name: "city" },
        { text: "State", name: "state" },
        { text: "ZipCode", name: "zipCode" },
    ];

    return (
        <div className="employeeTableScrollContainer">
            <table className="employeeTable">
                <thead className="employeeTable--header">
                    <tr>
                        {tableTHs.map((th: { text: string; name: string }) => {
                            return (
                                <TableHeaderTH
                                    key={nanoid()}
                                    title={th}
                                    sortedColumn={tableParams.sortedColumn}
                                />
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
                                    <EmployeeTableTD text={e.firstName} />
                                    <EmployeeTableTD text={e.lastName} />
                                    <EmployeeTableTD
                                        text={getFrenchSlashDate(
                                            new Date(e.startDate)
                                        )}
                                    />
                                    <EmployeeTableTD text={e.department} />
                                    <EmployeeTableTD
                                        text={getFrenchSlashDate(
                                            new Date(e.dateOfBirth)
                                        )}
                                    />
                                    <EmployeeTableTD text={e.street} />
                                    <EmployeeTableTD text={e.city} />
                                    <EmployeeTableTD text={e.state} />
                                    <EmployeeTableTD
                                        text={e.zipCode.toString()}
                                    />
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            {employees.length < 1 && <p> No employees found</p>}
        </div>
    );
};

export default EmployeeTable;
