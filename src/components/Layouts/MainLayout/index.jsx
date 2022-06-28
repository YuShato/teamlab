import { Container } from "./styles";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

MainLayout.propTypes = {
  "children": PropTypes.node.isRequired
};

export default MainLayout;
