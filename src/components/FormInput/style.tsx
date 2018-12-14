import styled from "styled-components";
import {Label} from "react-skeleton-ui/src/Forms";

export const LabelStyled = styled(Label)`
    color: #ffffff;
    display: block;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 0.25em;
    margin: 0 0 1em 0;
    text-transform: uppercase;
    cursor: pointer;
`;

export const TextInputStyled = styled.input`
    background-color: #fff;
    border: 1px solid #D1D1D1;
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
    appearance: none;
    background: rgba(212, 212, 255, 0.035);
    border: none;
    border-radius: 0;
    color: inherit;
    display: block;
    outline: 0;
    padding: 0 1em;
    text-decoration: none;
    width: 100%;
    color: #FFFFFF;
    height: 2.75em;
    font-size: 17pt;
    font-weight: 300;
    letter-spacing: 0.025em;
    line-height: 1.65;
    font-family: 'Varela Round', sans-serif;

    &:focus {
        border-color: #f76f91;
        box-shadow: 0 0 0 2px #f76f91;
        outline: 0;
    }
`;