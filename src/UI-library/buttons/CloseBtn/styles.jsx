import styled from "styled-components";

export const CloseBtnWrapper = styled.button`
  background-color: inherit;
  border: none;

  .close-container {
    position: relative;
    margin: auto;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  .leftright {
    height: 2px;
    width: 24px;
    margin-top: 12px;
    position: absolute;
    background-color: var(--white);
    border-radius: 2px;
    transform: rotate(45deg);
    transition: all 0.3s ease-in;
  }

  .rightleft {
    height: 2px;
    width: 24px;
    margin-top: 12px;
    position: absolute;
    background-color: var(--white);
    border-radius: 2px;
    transform: rotate(-45deg);
    transition: all 0.3s ease-in;
  }

  .close-container:hover .leftright {
    transform: rotate(-45deg);
    background-color: #c7fffd;
  }
  .close-container:hover .rightleft {
    transform: rotate(45deg);
    background-color: #c7fffd;
  }
  .close-container:active .leftright {
    transform: rotate(-45deg);
    background-color: #2690e0;
  }
  .close-container:active .rightleft {
    transform: rotate(45deg);
    background-color: #2690e0;
  }
`;
