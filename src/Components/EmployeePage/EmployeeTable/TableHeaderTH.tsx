import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSort,
    faSortDown,
    faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import { SortedColumn } from "../../../Types/TableParams";
import { useDispatch } from "react-redux";
import { changeSortColumn } from "../../../Features/tableParams.slice";

interface TableHeaderTHProps {
    title: {
        text: string;
        name: string;
    };
    sortedColumn: SortedColumn;
}

const TableHeaderTH = ({ title, sortedColumn }: TableHeaderTHProps) => {
    const dispatch = useDispatch();

    const handleSorting = (title: string, type: string): void => {
        dispatch(changeSortColumn({ name: title, type }));
    };

    const getDisplayedIcon = () => {
        if (title.name !== sortedColumn.name)
            return (
                <span className="thIcon sortNoneIcon">
                    <FontAwesomeIcon
                        icon={faSort}
                        onClick={() => handleSorting(title.name, "up")}
                    />
                </span>
            );
        if (sortedColumn.type === "up")
            return (
                <span className="thIcon sortDownIcon">
                    <FontAwesomeIcon
                        icon={faSortUp}
                        onClick={() => handleSorting(title.name, "down")}
                    />
                </span>
            );
        if (sortedColumn.type === "down")
            return (
                <span className="thIcon sortUpIcon">
                    <FontAwesomeIcon
                        icon={faSortDown}
                        onClick={() => handleSorting(title.name, "up")}
                    />
                </span>
            );
    };

    return (
        <th>
            <span className="thText">{title.text}</span>
            {getDisplayedIcon()}
        </th>
    );
};

export default TableHeaderTH;
