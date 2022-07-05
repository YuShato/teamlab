import { Container } from "./styles";
import PropTypes from "prop-types";

/**
 * The MainLayout properties.
 *
 * @typedef {object} Props
 * @property {React.ReactElement} children - один или несколько JSX-компонентов.
 */

/**
 * MainLayout component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} Возвращает JSX-элемент базовой разметки страницы (каркас)
 */

const MainLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

MainLayout.propTypes = {
    /** children-  Внутренние JSX-компоненты для отображения на странице-каркасе */
  "children": PropTypes.node.isRequired
};

export default MainLayout;
