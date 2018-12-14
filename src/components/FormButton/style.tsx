import styled from "styled-components";
import {Button} from 'react-skeleton-ui';

export const ButtonStyled = styled(Button)`
    border-radius: 0;
    box-sizing: border-box;
    background-color: transparent;
    border: 0!important;
    box-shadow: inset 0 0 0 2px #FFFFFF;
    color: #FFFFFF!important;
    cursor: pointer;
    font-size: 0.8em;
    font-weight: 600;
    height: 4em;
    letter-spacing: 0.25em;
    line-height: 3.5em;
    padding: 0 2em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    margin-bottom: 2rem;
    font-family: 'Varela Round', sans-serif;
    
    &:hover, &:active, &:visited {
        border-bottom-color: transparent!important;
        color: #f76f91 !important;
        box-shadow: inset 0 0 0 2px #f76f91!important;
    }
`;