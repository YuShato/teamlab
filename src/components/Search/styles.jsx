import styled, { css, keyframes } from "styled-components";
import SearchIcon from "../SearchIcon";
import ArrowRightIcon from "../ArrowRightIcon";

export const WidthWrapper = styled.div`
    width: 200px;
    user-select: none;
`;

export const Container = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  box-sizing: border-box;
  border-radius: 50px;
  border: 1px solid var(--accent_blue);
  padding: 5px;
  background: transparent;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${({ hover }) =>
        hover &&
        css`
      width: 200px;
      -webkit-box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.24);
      box-shadow: 2px 2px 7px 2px rgba(0, 0, 0, 0.24);
      border: 1px solid var(--accent_blue);
      @media (min-width: 768px) {
        width: 250px;
      }
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 20px;
  outline: 0;
  border: 0;
  font-size: 16px;
  border-radius: 20px;
  padding: 0 10px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 20px;
  width: 20px;
  fill: var(--accent_blue);
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

export const IconMagnifyingGlass = styled(SearchIcon)`
  ${IconCommonCss}
`;

export const IconRightArrow = styled(ArrowRightIcon)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: #393e46;
  }
`;