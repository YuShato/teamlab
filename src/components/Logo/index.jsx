import { Link } from "react-router-dom";
import { LogoContainer } from "./styles";
import { Routes } from "../../constants/routes";
import PropTypes from "prop-types";

/**
 * Logo component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} Возвращает JSX-компонент анимированного логотипа.
 */

const Logo = ({ isHowNav = false }) => {
    return (
        <Link to={Routes.main}>
            <LogoContainer id="container" isHowNav={isHowNav}>
                <div className="this">
                    <div className="perspective">
                        <div className="sq"></div>
                        <div className="s1"></div>
                        <div className="s2"></div>
                        <div className="s3"></div>
                        <div className="s4"></div>
                    </div>
                    <div className="text">Softee</div>
                </div>
            </LogoContainer>
        </Link>
    );
};

Logo.propTypes = {
    "isHowNav": PropTypes.bool
};

export default Logo;