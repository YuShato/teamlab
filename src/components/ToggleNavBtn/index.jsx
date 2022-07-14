import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import PropTypes from "prop-types";
import { ToggleNavBtnWrapper } from "./styles";

const ToggleNavBtn = ({ isNavOpen, onToggleNav }) => {

    return (
        <ToggleNavBtnWrapper title={isNavOpen ? "развернуть меню" : "свернуть меню"} type="button" onClick={onToggleNav}>
            {isNavOpen ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        </ToggleNavBtnWrapper>
    );
};

ToggleNavBtn.propTypes = {
    "isNavOpen": PropTypes.bool.isRequired,
    "onToggleNav": PropTypes.func.isRequired
};

export default ToggleNavBtn;