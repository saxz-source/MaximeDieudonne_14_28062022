import { useSelector } from "react-redux";
import { getAllEmployees } from "../../../Features/employee.selectors";
import { getSeenEntriesNumber } from "../../../Features/tableParams.selectors";
import EmployeeTable from "./EmployeeTable";
import SearchEmployee from "./SearchEmployee";
import ShowEntriesSelector from "./ShowEntrieSelector";
import "./EmployeeTable.css";
import { useState } from "react";

export const EmployeeTableZone = () => {
    const employees = useSelector(getAllEmployees());
    const seenEntries: number = useSelector(getSeenEntriesNumber());

    //const [loadStatus, setLoadStatus] = useState<string>("loading")

    const searchEmployee = () => {};

    const changeTab = () => {};

    console.log(employees);

    return (
        <section>
            <div className="tableAbove">
                <ShowEntriesSelector seenEntries={seenEntries} />
                <SearchEmployee />
            </div>
            <div>{employees && <EmployeeTable employees={employees} />}</div>
            <div></div>
        </section>
    );
};
