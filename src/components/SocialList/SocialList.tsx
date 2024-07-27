import React from 'react';
import SocialItem from '@/components/Socialtem';
import { ISocial } from '@/interfaces/app';
import { getSocials } from '@/helpers/api';

const SocialList = async () => {
  const { socials } = await getSocials();

  return (
    <div className='mt-5 flex justify-center'>
      {socials.map((social: ISocial) => (
        <SocialItem key={social.id} {...social} isLoading={false} />
      ))}
    </div>
  );
};

export default SocialList;
