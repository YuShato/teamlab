import { useState, useEffect } from "react";
import { NavWrapper, MenuContainer } from "./styles";
import Logo from "../Logo";
import NavLinkItem from "../NavLinkItem";
import PropTypes from "prop-types";
import ToggleNavBtn from "../ToggleNavBtn";

/**
 * Navigation component.
 * Генерирует и возвращает компонент основной навигации по разделу. 
 * Данные берет из массива объектов
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} Возвращает JSX-компонент меню-бара слева.
 */

const Navigation = ({ navLinksDataArray }) => {

    const [ showNav, setShowNav ] = useState(false);

    const onToggleNav = () => {
        setShowNav(!showNav);
    };

    useEffect(() => {

    }, [ showNav ]);

    return (
        <NavWrapper isShowNav={showNav}>
            <Logo isShowNav={showNav} />
            <MenuContainer>
                {navLinksDataArray.map((link, index) => (
                    <NavLinkItem key={index} linkInfo={link} isTextShow={showNav} />
                ))}
            </MenuContainer>
            <ToggleNavBtn isNavOpen={showNav} onToggleNav={onToggleNav} />
        </NavWrapper>
    );
};

Navigation.propTypes = {
    "navLinksDataArray": PropTypes.array.isRequired
};

export default Navigation;