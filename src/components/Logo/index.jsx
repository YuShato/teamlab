import { Link } from "react-router-dom";
import { LogoContainer } from "./styles";
import { Paths } from "../../../consts/paths";

/**
 * Logo component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} Возвращает JSX-компонент анимированного логотипа.
 */

const Logo = () => {
    return (
        <Link to={Paths.main}>
            <LogoContainer id="container">
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

export default Logo;