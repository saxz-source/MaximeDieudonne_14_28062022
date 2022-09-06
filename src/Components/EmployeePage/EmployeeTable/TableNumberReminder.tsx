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
    return (
        <span>
            Showing {pageNumber * seenEntries - seenEntries + 1} to{" "}
            {pageNumber * seenEntries} of {totalEntries}
        </span>
    );
};

export default TableNumberReminder;
