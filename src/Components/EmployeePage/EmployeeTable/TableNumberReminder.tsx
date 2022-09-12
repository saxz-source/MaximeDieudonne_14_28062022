import { useEffect, useState } from "react";

interface TableNumberReminderProps {
    totalEntries: number;
    seenEntries: number;
    pageNumber: number;
}

const TableNumberReminder = ({
    pageNumber,
    totalEntries,
    seenEntries,
}: TableNumberReminderProps) => {
    const [pageNumberByEntries, setResult] = useState<number>(0);

    useEffect(() => {
        setResult(pageNumber * seenEntries);
    }, [pageNumber, seenEntries]);

    return (
        <span className="tableReminder">
            Showing {pageNumberByEntries - seenEntries + 1} to{" "}
            {pageNumberByEntries > totalEntries
                ? pageNumberByEntries
                : totalEntries}{" "}
            of {totalEntries}
        </span>
    );
};

export default TableNumberReminder;
