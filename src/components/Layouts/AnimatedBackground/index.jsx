import { BackgroundWrapper } from "./styles";
import PropTypes from "prop-types";

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
  children: PropTypes.element.isRequired,
};

export default AnimatedBackground;
