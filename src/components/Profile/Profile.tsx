import * as React from 'react';
import { ProfileDetails, ProfilePicture, ProfileWrapper } from './style';

const Profile = () => (
  <ProfileWrapper>
    <ProfilePicture />
    <ProfileDetails>
      <h1>Costin Mirica</h1>
      <h2>Full Stack Developer | Bucharest, Romania</h2>
    </ProfileDetails>
  </ProfileWrapper>
);

export default Profile;
