import styled from 'styled-components';

export const ProjectIconWrapper = styled.span`
    display: inline-flex;
    align-items: center;
`;

export const ProjectIcon = styled<{ icon: string }, 'span'>('span')`
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 25%;
    background: url(${(props) => props.icon});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-right: 15px;
    border: 1px solid #555555;
`;
