import { useSelector } from "react-redux";
import { getAllEmployees } from "../../../Features/employee.selectors";
import { getTableParams } from "../../../Features/tableParams.selectors";
import EmployeeTable from "./EmployeeTable";
import SearchEmployee from "./SearchEmployee";
import ShowEntriesSelector from "./ShowEntrieSelector";
import "./EmployeeTable.css";
import { useEffect, useState } from "react";
import { mockEmployees } from "../../../MockData/employees";
import { Employee } from "../../../Types/Employee";
import { TableParams } from "../../../Types/TableParams";
import TableNumberReminder from "./TableNumberReminder";
import { TablePaginator } from "./TablePaginator";
import { getDisplayedEmployees } from "../../../Services/employeeTable.service";

export const EmployeeTableZone = () => {
    // const employees = useSelector(getAllEmployees());

    const employeesArray = mockEmployees;

    const [employees, setEmployees] = useState<Employee[]>(employeesArray);

    const tableParams: TableParams = useSelector(getTableParams());

    //const [loadStatus, setLoadStatus] = useState<string>("loading")

    const searchEmployee = () => {};

    const changeTab = () => {};

    useEffect(() => {
        setEmployees(getDisplayedEmployees(tableParams, employeesArray));
    }, [tableParams]);

    return (
        <section className="employeeTableZone">
            <div className="tableAbove">
                <ShowEntriesSelector seenEntries={tableParams.seenEntries} />
                <SearchEmployee />
            </div>
            <div>{employees && <EmployeeTable employees={employees} />}</div>
            <div className="tableBelow">
                <TableNumberReminder
                    totalEntries={employeesArray.length}
                    seenEntries={tableParams.seenEntries}
                    pageNumber={tableParams.pageNumber}
                />

                <TablePaginator
                    totalEntries={employeesArray.length}
                    seenEntries={tableParams.seenEntries}
                    pageNumber={tableParams.pageNumber}
                />
            </div>
        </section>
    );
};
