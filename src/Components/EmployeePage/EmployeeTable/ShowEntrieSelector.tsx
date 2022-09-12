import { nanoid } from "@reduxjs/toolkit";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { changeSeenEntries } from "../../../Features/tableParams.slice";

interface ShowEntriesSelectorProps {
    seenEntries: number;
}

export const ShowEntriesSelector = ({
    seenEntries,
}: ShowEntriesSelectorProps) => {
    const dispatch = useDispatch();
    const onChangeSeenEntries = (e: any): void => {
        dispatch(changeSeenEntries(Number(e.target.value)));
    };

    const selectOptions = ["10", "25", "50", "100"];

    return (
        <div>
            <span> Show </span>
            <label htmlFor="numberOfEntries" className="numberOfEntries--label">
                Select the amount of entries to display
            </label>
            <select
                id="numberOfEntries"
                value = {seenEntries ? seenEntries : "10"}
                onChange={onChangeSeenEntries}
            >
                {selectOptions.map((o: string) => {
                    return (
                        <option value={o} key={nanoid()}>
                            {o}
                        </option>
                    );
                })}
            </select>
            <span> Entries</span>
        </div>
    );
};

export default ShowEntriesSelector;
