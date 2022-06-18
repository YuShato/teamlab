import styled from "styled-components";

export const DropDown = styled.div`
  margin: 0 auto;
  z-index: 10000;
  width: 250px;
  position: relative;

  &,
  & * {
    z-index: 10;
  }
  & .dropdown-btn {
    cursor: pointer;
    background: #e5eaeb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    background: var(--white);
    border: 1px solid var(--accent_blue);
    border-radius: 5px;
    color: #777;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    & svg {
      fill: var(--accent_blue);
    }
  }
  .dropdown-content {
    position: absolute;
    background-color: var(--white);
    border-radius: 0 0 5px 5px;
    left: 0;
    width: 250px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.07);
  }
  .dropdown-content .item {
    padding: 10px;
    cursor: pointer;
  }
  .dropdown-content .item:hover {
    background: #bae2f0;
  }

  button {
    z-index: -1;
    display: block;
    width: 250px;
    margin: 0 auto;
  }
`;
