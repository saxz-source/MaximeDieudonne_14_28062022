interface ShowEntriesSelectorProps {
    seenEntries: number;
}

export const ShowEntriesSelector = ({
    seenEntries,
}: ShowEntriesSelectorProps) => {
    const changeSeenEntries = () => {};

    return (
        <div>
            <span> Show </span>
            <label htmlFor="numberOfEntries" className="numberOfEntries--label">
                Select the amount of entries to display
            </label>
            <select id="numberOfEntries">
                <option value ="10">10</option>
                <option value ="25">25</option>
                <option value ="50">50</option>
                <option value ="100">100</option>
            </select>
            <span> Entries</span>
        </div>
    );
};

export default ShowEntriesSelector;
