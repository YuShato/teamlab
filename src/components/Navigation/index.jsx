import { NavWrapper, MenuContainer } from "./styles";
import Logo from "../Logo";
import NavLinkItem from "../NavLinkItem";
import PropTypes from "prop-types";

/**
 * Navigation component.
 * Генерирует и возвращает компонент основной навигации по разделу. 
 * Данные берет из массива объектов
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} Возвращает JSX-компонент меню-бара слева.
 */

const Navigation = ({ navLinksDataArray }) => {
    return (
        <NavWrapper>
            <Logo />
            <MenuContainer>
                {navLinksDataArray.map((link, index) => (
                    <NavLinkItem key={index} linkInfo={link} />
                ))}
            </MenuContainer>
        </NavWrapper>
    );
};

Navigation.propTypes = {
    "navLinksDataArray": PropTypes.array.isRequired
};

export default Navigation;