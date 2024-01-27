import React from 'react';
import { BASE_URL } from '@/constants';
import Header from '@/components/Header';
import style from './Profile.module.scss';

const Profile = () => (
  <div className={`${style.wrapper} flex flex-col justify-center`}>
    <div
      className={`${style.picture} mx-auto my-7`}
      style={{
        backgroundImage: `url(${BASE_URL}/static/costin-mirica.jpeg)`,
      }}
    />
    <div className='flex flex-col text-center'>
      <Header level={1} className='text-2xl lg:text-4xl'>
        COSTIN MIRICĂ
      </Header>
      <Header level={2} className='mt-5 text-base font-bold'>
        Full Stack Developer | Bucharest, Romania
      </Header>
    </div>
  </div>
);

export default Profile;
