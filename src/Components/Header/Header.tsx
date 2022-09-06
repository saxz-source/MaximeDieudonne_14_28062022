import { Logo } from "./Logo/Logo";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersLine } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className="mainHeader">
            <Link to="/">
                <div className="mainHeader--logoAndTitle">
                    <Logo /> <h1 className="mainHeader--title">HRNET</h1>
                </div>
            </Link>

            <Link to="/employees">
                <FontAwesomeIcon
                    icon={faUsersLine}
                    className="mainHeader--seeUserIcon "
                />
            </Link>
        </div>
    );
};

export default Header;
//  <img src={peopleGroupIcon} alt="Link to the employee table view" title="See the registered employees"  className="mainHeader--seeUserIcon "/>
