
import { LinkItemWrapper } from "./styles";
import PropTypes from "prop-types";

const NavLinkItem = ({ linkInfo }) => {
  return (
    <LinkItemWrapper
      to={linkInfo.path}
      aria-label={linkInfo.name}
      className={linkInfo.isActive ? "active" : ""}
    >
      {linkInfo.icon}
      {linkInfo.name}
    </LinkItemWrapper>
  );
};

NavLinkItem.propTypes = {
  "linkInfo": PropTypes.shape({
    "path": PropTypes.string.isRequired,
    "icon": PropTypes.any,
    "name": PropTypes.string.isRequired,
    "isActive": PropTypes.bool.isRequired,
  })
};

export default NavLinkItem;