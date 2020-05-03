import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  margin-top: 50px;
  @media (min-width: 805px) {
    & {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & .profile-picture {
      display: inline-block;
    }

    & .profile-details {
      display: inline-block;
      width: calc(100% - 150px);
      padding-left: 35px;
      text-align: left;
    }
  }
`;

export const ProfilePicture = styled.div.attrs({
  className: 'profile-picture',
})`
  background: url(/static/img/costin-mirica.jpg);
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-size: 150px;
  border: 3px solid #e6e6e6;
  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.15);
  transition: transform 0.5s ease-in-out;
  box-sizing: border-box;
  margin: 0 auto;

  &:hover {
    transform: translate(0px, -10px) rotate(0deg);
  }
`;

export const ProfileDetails = styled.div.attrs({
  className: 'profile-details',
})`
  box-sizing: border-box;
  width: 100%;
  text-align: center;

  h1 {
    margin: 0;
  }
`;
