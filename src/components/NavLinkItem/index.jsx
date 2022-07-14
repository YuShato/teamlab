
import { LinkItemWrapper } from "./styles";
import PropTypes from "prop-types";

const NavLinkItem = ({ linkInfo, isTextShow = true }) => {
  return (
    <LinkItemWrapper
      to={linkInfo.path}
      aria-label={linkInfo.name}
      className={linkInfo.isActive ? "active" : ""}
      isTextShow={isTextShow}
    >
      {linkInfo.icon}
      {isTextShow && linkInfo.name}
    </LinkItemWrapper>
  );
};

NavLinkItem.propTypes = {
  "linkInfo": PropTypes.shape({
    "path": PropTypes.string.isRequired,
    "icon": PropTypes.any,
    "name": PropTypes.string.isRequired,
    "isActive": PropTypes.bool.isRequired,
  }),
  "isTextShow": PropTypes.bool.isRequired
};

export default NavLinkItem;