import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

interface TablePaginator {
    totalEntries: number;
    seenEntries: number;
}

export const TablePaginator = ({
    totalEntries,
    seenEntries,
}: TablePaginator) => {
    const [tabArray, setTabArray] = useState<number[]>([1]);

    const [selectedTab, setSelectedTab] = useState<number>(1);

    const handleSelectedTab = (tabNumber: number) => {
        setSelectedTab(tabNumber);
    };

    const populateTabArray = () => {
        const tabsNumber = totalEntries / seenEntries;
        const newArray: number[] = [];
        for (let i = 0; i < tabsNumber; i++) {
            newArray.push(i);
        }
        setTabArray(newArray);
    };

    useEffect(() => {
        populateTabArray();
    }, [totalEntries, seenEntries]);
    return (
        <div className="tablePaginatorDiv">
            <span>Previous</span>

            {tabArray.map((t: number) => {
                return (
                    <span
                        key={nanoid()}
                        className={
                            "paginatorTab " +
                            (selectedTab === t && "selectedTab")
                        }
                        onClick={() => {
                            handleSelectedTab(t);
                        }}
                    >
                        {t}
                    </span>
                );
            })}

            <span>Next</span>
        </div>
    );
};
export default TablePaginator;
