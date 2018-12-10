import styled from "styled-components";
import profilePicture from "../../assets/img/costin-mirica.jpg";

export const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`;

export const ProfilePicture = styled.div`
    display: inline-block;
    background: url(${profilePicture});
    border-radius: 50%;
    width: 150px;
    height: 150px;
    background-size: 150px;
    border: 3px solid #E6E6E6;
    box-shadow: 0px 5px 5px 5px rgba(0,0,0,0.15);
    transition: transform .5s ease-in-out;
    box-sizing: border-box;
    
    &:hover {
        transform: translate(0px, -10px) rotate(0deg);
    }
`;

export const ProfileDetails = styled.div`
    box-sizing: border-box;
    display: inline-block;
    width: calc(100% - 150px);
    padding-left: 35px;
    
    h1 {
       margin: 0;
    }
`;