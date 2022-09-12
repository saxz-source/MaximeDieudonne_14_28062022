import { Employee } from "../Types/Employee";
import { TableParams } from "../Types/TableParams";

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
    const { seenEntries, pageNumber } = tableParams;
    return employeesArray.slice(
        seenEntries * (pageNumber - 1),
        seenEntries * (pageNumber - 1) + seenEntries
    );
};

export const sortString = (stringArray: string[], ascending : boolean): string[] => {
    return ascending ? stringArray.sort() : stringArray.sort().reverse()
};

export const sortNumbers = (numberArray: number[] ,ascending : boolean): number[] => {
    return ascending ? numberArray.sort() : numberArray.sort().reverse()
};

export const sortDate = (dateArray: Date[], ascending : boolean): Date[] => {
    return  dateArray.sort();
};
