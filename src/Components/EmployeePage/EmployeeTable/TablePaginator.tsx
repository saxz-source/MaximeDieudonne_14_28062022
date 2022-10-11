import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changePageNumber } from "../../../Features/tableParams.slice";
import { populatePageNumberArray } from "../../../Services/employeeTable.service";

interface TablePaginatorProps {
    totalEntries: number;
    seenEntries: number;
    pageNumber: number;
}

export const TablePaginator = ({
    totalEntries,
    seenEntries,
    pageNumber,
}: TablePaginatorProps) => {
    const [tabArray, setTabArray] = useState<number[]>([1]);

    const dispatch = useDispatch();

    /**
     * Modify the page of results selected bu the users
     * @param {number} tabNumber
     * @returns {void}
     */
    const handleSelectedPageNumber = (tabNumber: number): void => {
        // Limit the floor
        if (tabNumber < 1) tabNumber = 1;


      console.log( totalEntries / seenEntries) 
        // Limit the ceil
        if (tabNumber > Math.trunc(totalEntries / seenEntries) +1 )
            tabNumber = tabArray.slice(-1)[0];
        dispatch(changePageNumber(tabNumber));
    };

    /**
     * Make the array of page numbers
     * @returns {void}
     */
    const onPopulatePageNumberArray = (): void => {
        const pageNumberArray = populatePageNumberArray(
            totalEntries,
            seenEntries,
            pageNumber
        );
        setTabArray(pageNumberArray);
    };

    useEffect(() => {
        onPopulatePageNumberArray();
    }, [totalEntries, seenEntries, pageNumber]);

    return (
        <div className="tablePaginatorDiv">
            <span
                onClick={() => {
                    handleSelectedPageNumber(pageNumber - 1);
                }}
            >
                Previous
            </span>

            {tabArray.map((t: number) => {
                return (
                    <span
                        key={nanoid()}
                        className={
                            "paginatorTab " +
                            (pageNumber === t && "selectedTab")
                        }
                        onClick={() => {
                            handleSelectedPageNumber(t);
                        }}
                    >
                        {t}
                    </span>
                );
            })}

            <span
                onClick={() => {
                    handleSelectedPageNumber(pageNumber + 1);
                }}
            >
                Next
            </span>
        </div>
    );
};
export default TablePaginator;
