import React, { memo } from 'react';
import Loader from '@/components/Loader';
import { ISocial } from '@/interfaces/app';
import style from './SocialItem.module.scss';

interface ISocialItemProps extends ISocial {
  isLoading: boolean;
}

const SocialItem = async (props: ISocialItemProps) => {
  const { id, url, title, icon, isLoading = false } = props;

  if (isLoading) {
    return <Loader width={5} height={5} className='fill-white text-teal-700' />;
  }

  return (
    <a key={id} href={url} title={title} target='_blank' className={style.socialItem} rel='noreferrer'>
      <span className={style.icon} style={{ maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})` }} />
    </a>
  );
};

export default memo(SocialItem);
