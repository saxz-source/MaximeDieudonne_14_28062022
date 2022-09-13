import { useDispatch } from "react-redux";
import { changeSearchValue } from "../../../Features/tableParams.slice";

export const SearchEmployee = () => {
    const dispatch = useDispatch();
    const searchChange = (e: any) => {
        const value = e.target.value;
        if (value.length > 2) {
            dispatch(changeSearchValue(value));
        } else {
            dispatch(changeSearchValue(""));
        }
    };

    return (
        <div className="searchEmployee">
            <span>Search</span>
            <input type="text" onChange={searchChange} />
        </div>
    );
};

export default SearchEmployee;
