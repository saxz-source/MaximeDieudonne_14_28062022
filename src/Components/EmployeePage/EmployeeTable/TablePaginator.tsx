import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changePageNumber } from "../../../Features/tableParams.slice";
import { populatePageNumberArray } from "../../../Services/employeeTable.service";

interface TablePaginator {
    totalEntries: number;
    seenEntries: number;
    pageNumber: number;
}

export const TablePaginator = ({
    totalEntries,
    seenEntries,
    pageNumber,
}: TablePaginator) => {
    const [tabArray, setTabArray] = useState<number[]>([1]);

    const dispatch = useDispatch();

    const handleSelectedPageNumber = (tabNumber: number): void => {
        if (tabNumber < 1) tabNumber = 1;
        if (tabNumber > tabArray.length) tabNumber = tabArray.length;
        dispatch(changePageNumber(tabNumber));
    };

    /**
     * Make the array of page numbers
     */
    const onPopulatePageNumberArray = (): void => {
        const pageNumberArray = populatePageNumberArray(
            totalEntries,
            seenEntries
        );
        setTabArray(pageNumberArray);
    };

    useEffect(() => {
        onPopulatePageNumberArray();
    }, [totalEntries, seenEntries]);

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
