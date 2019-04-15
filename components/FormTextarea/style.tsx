import styled from 'styled-components';
import {TextInputArea} from '../Skeleton';

export const TextInputAreaStyled = styled(TextInputArea)`
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
    font-size: 17pt;
    font-weight: 300;
    letter-spacing: 0.025em;
    line-height: 1.65;
    min-width: 100%;
    min-height: 25rem;
    font-family: 'Varela Round', sans-serif;

    &:focus {
        border-color: #f76f91;
        box-shadow: 0 0 0 2px #f76f91;
    }
`;
