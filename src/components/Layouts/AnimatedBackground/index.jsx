import { BackgroundWrapper } from "./styles";
import PropTypes from "prop-types";

/**
 * The AnimatedBackground properties.
 *
 * @typedef {object} Props
 * @property {React.ReactElement} children - один или несколько JSX-компонентов.
 */

/**
 * AnimatedBackground component.
 *
 * @type {React.FC<Props>}
 * @returns {React.ReactElement} Возвращает анимированный фон для страницы входа.
 */

const AnimatedBackground = ({ children }) => {
  return (
    <BackgroundWrapper>
      <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div>
      <div className='light x8'></div>
      <div className='light x9'></div>
      {children}
    </BackgroundWrapper>
  );
};

AnimatedBackground.propTypes = {
  /** children -  Внутренние JSX-компоненты для отображения на анимированном фоне */
  "children": PropTypes.element.isRequired,
};

export default AnimatedBackground;
