import styled from "styled-components";

export const ToggleNavBtnWrapper = styled.button`
background-color: transparent;
border: none;
width: 30px;
height: 30px;
color: var(--accent-color);
font-size: 26px;
position: absolute;
z-index: 10;
bottom: 30px;;
right: 20px;
transition: 0.3s all;

& > svg {
    fill: var(--accent_blue);
}

&:hover > svg {
    fill: var(--dark_blue);
}
`;