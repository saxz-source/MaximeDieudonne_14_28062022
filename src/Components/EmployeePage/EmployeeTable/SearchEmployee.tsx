import { useDispatch } from "react-redux";
import { changeSearchValue } from "../../../Features/tableParams.slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
 
            <input type="text" className="searchEmployee--input" onChange={searchChange} placeholder='Search...' />
        </div>
    );
};

export default SearchEmployee;
{/* <span className="searchEmployee--title">Search</span>
<FontAwesomeIcon icon={faMagnifyingGlass}/> */}