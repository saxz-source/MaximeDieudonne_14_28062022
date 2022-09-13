import { Employee } from "../Types/Employee";
import { SortedColumn, TableParams } from "../Types/TableParams";

/**
 * Make the array of number for the paginator
 * @param totalEntries total employee registered
 * @param seenEntries number of table entries seen
 * @returns {number []}
 */
export const populatePageNumberArray = (
    totalEntries: number,
    seenEntries: number
): number[] => {
    const tabsNumber = totalEntries / seenEntries;
    const newArray: number[] = [];
    for (let i = 1; i < tabsNumber + 1; i++) {
        newArray.push(i);
    }
    return newArray;
};

/**
 * Make the array of employees seen in the table
 * @param {TableParams} tableParams
 * @param {Employee[]} employeesArray
 * @returns {Employee[]}
 */
export const getDisplayedEmployees = (
    tableParams: TableParams,
    employeesArray: Employee[]
): Employee[] => {
    const { sortedColumn, searchValue } = tableParams;

    const searchedEmployees =
        searchValue && searchValue !== ""
            ? getSearchEmployees(employeesArray, searchValue)
            : employeesArray;

    return searchedEmployees.length > 0
        ? sortEmployees(searchedEmployees, sortedColumn)
        : [];
};

export const getViewedEmployees = (
    tableParams: TableParams,
    employees: Employee[]
): Employee[] => {
    const { seenEntries, pageNumber } = tableParams;
    return employees.slice(
        seenEntries * (pageNumber - 1),
        seenEntries * (pageNumber - 1) + seenEntries
    );
};

const getSearchEmployees = (
    employee: Employee[],
    searchValue: string
): Employee[] => {
    return employee.filter((e: Employee) => {
        return Object.values(e)
            .map((v: string) => {
                return v;
            })
            .join("")
            .toUpperCase()
            .includes(searchValue.toUpperCase());
    });
};

/**
 * Sort the employee array
 * @param {Employee[]} employees
 * @param {SortedColumn} sortedColumn
 * @returns {Employee[]}
 */
const sortEmployees = (
    employees: Employee[],
    sortedColumn: SortedColumn
): Employee[] => {
    const { name, type } = sortedColumn;
    // if (typeof employees[0][name] === undefined)
    if (employees[0][name] instanceof Date) sortDate(employees, name, type);
    return sortPropertyString(employees, name, type);
};

/**
 * Sort the array by string property
 * @param {Employee[]}  employees
 * @param property
 * @param {string} ascending can be up , down or none
 * @returns  {Employee[]}
 */
export const sortPropertyString = (
    employees: Employee[],
    property: string,
    ascending: string
): Employee[] => {
    const sortedArray = employees.sort((a, b) =>
        a[`${property}`] > b[`${property}`]
            ? 1
            : b[`${property}`] > a[`${property}`]
            ? -1
            : 0
    );

    return ascending === "up" ? sortedArray : sortedArray.reverse();
};

/**
 * Sort an array by date property value
 * @param {Employee[]}  employees
 * @param property
 * @param {string} ascending can be up , down or none
 * @returns {Employee[]}
 */
export const sortDate = (
    employees: Employee[],
    property: string,
    ascending: string
): Employee[] => {
    const sortedArray = employees.sort(
        (a, b) => a[`${property}`] - b[`${property}`]
    );

    return ascending === "up" ? sortedArray : sortedArray.reverse();
};
