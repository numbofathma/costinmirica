import React, { FC } from 'react';
import { BASE_URL } from '@/constants';
import { LangVars } from '@/constants/lang';
import Header from '@/components/Header';
import style from './Profile.module.scss';

const Profile: FC = () => {
  const { name, position, location } = LangVars.Profile;
  return (
    <div className={`${style.wrapper} flex flex-col justify-center`}>
      <div
        className={`${style.picture} mx-auto my-7`}
        style={{
          backgroundImage: `url(${BASE_URL}/static/costin-mirica.webp)`,
        }}
      />
      <div className='flex flex-col text-center'>
        <Header level={1} className='text-2xl lg:text-4xl'>
          {name}
        </Header>
        <Header level={2} className='mt-5 text-base font-bold'>
          {position} | {location}
        </Header>
      </div>
    </div>
  );
};

export default Profile;
