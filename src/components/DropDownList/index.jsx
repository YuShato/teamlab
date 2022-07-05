import { useState } from "react";
import { DropDown } from "./styles";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import PropTypes from "prop-types";

/**
 * The DropDownList properties.
 *
 * @typedef {object} Props
 * @property {Array} citiesListArray - Массив строк с городами.
 * @example citiesListArray = [ "Пермь", "Томск","Москва" ];
 */

/**
 * DropDownList component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} Выпадающий список городов присутствия (в которых есть учебный центр).
 */

const DropDownList = ({ citiesListArray }) => {
    const [ isActive, setIsActive ] = useState(false);
    const [ selected, setIsSelected ] = useState("Выберите город");

    return (
        <DropDown className="dropdown">
            <div
                onClick={() => {
                    setIsActive(!isActive);
                }}
                className="dropdown-btn"
            >
                {selected}
                {isActive ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
            </div>
            <div
                className="dropdown-content"
                style={{ "display": isActive ? "block" : "none" }}
            >
                {citiesListArray.map((city, index) => {
                    return (
                        <div
                            key={index}
                            onClick={(e) => {
                                setIsSelected(e.target.textContent);
                                setIsActive(!isActive);
                            }}
                            className="item"
                        >
                            {city}
                        </div>
                    );
                })}
            </div>
        </DropDown>
    );
};

DropDownList.propTypes = {
    "citiesListArray": PropTypes.array.isRequired,
};

export default DropDownList;