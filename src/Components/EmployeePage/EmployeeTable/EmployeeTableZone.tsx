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
import {
    getDisplayedEmployees,
    getViewedEmployees,
} from "../../../Services/employeeTable.service";
import StandardLoader from "../../Loader/StandardLoader";

export const EmployeeTableZone = () => {
   //  const employeesArray: Employee[] = mockEmployees;
   const employeesArray: Employee[] = useSelector(getAllEmployees());

    const [employeesLength, setEmployeesLength] = useState<number>(
        employeesArray.length
    );
    const [viewedEmployees, setViewedEmployees] =
        useState<Employee[]>(employeesArray);

    const tableParams: TableParams = useSelector(getTableParams());

    useEffect(() => {
        if (employeesArray.length > 0) {
            // Get the array of employees corresponding to the search value, and sorted
            const newArray = getDisplayedEmployees(tableParams, employeesArray);
            setEmployeesLength(newArray.length);
            // Just get the viewed employees
            setViewedEmployees(getViewedEmployees(tableParams, newArray));
        }
    }, [tableParams]);

    return (
        <section className="employeeTableZone">
            <div className="tableAbove">
                <ShowEntriesSelector seenEntries={tableParams.seenEntries} />
                <SearchEmployee />
            </div>
            <div>
                {viewedEmployees && (
                    <EmployeeTable
                        employees={viewedEmployees}
                        tableParams={tableParams}
                    />
                )}
            </div>
            <div className="tableBelow">
                <TableNumberReminder
                    totalEntries={employeesLength}
                    seenEntries={tableParams.seenEntries}
                    pageNumber={tableParams.pageNumber}
                />
                <TablePaginator
                    totalEntries={employeesLength}
                    seenEntries={tableParams.seenEntries}
                    pageNumber={tableParams.pageNumber}
                />
            </div>
        </section>
    );
};
