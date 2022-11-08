import { useDispatch } from "react-redux";
import {
    changePageNumber,
    changeSearchValue,
} from "../../../Features/tableParams.slice";

export const SearchEmployee = () => {
    const dispatch = useDispatch();
    const searchChange = (e: any) => {
        const value = e.target.value;
        if (value.length > 2) {
            dispatch(changePageNumber(1));
            dispatch(changeSearchValue(value));
        } else {
            dispatch(changePageNumber(1));
            dispatch(changeSearchValue(""));
        }
    };

    return (
        <div className="searchEmployee">
            <input
                type="text"
                className="searchEmployee--input"
                onChange={searchChange}
                placeholder="Search..."
            />
        </div>
    );
};

export default SearchEmployee;
{
    /* <span className="searchEmployee--title">Search</span>
<FontAwesomeIcon icon={faMagnifyingGlass}/> */
}
