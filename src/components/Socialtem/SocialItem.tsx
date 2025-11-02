import { memo } from 'react';
import { ISocial } from '@/interfaces/app';
import style from './SocialItem.module.scss';
import SvgIcon from '../SvgIcon';

const SocialItem = async (props: ISocial) => {
  const { id, url, title, icon } = props;

  return (
    <a key={id} href={url} title={title} target='_blank' className={style.socialItem} rel='noreferrer'>
      <SvgIcon icon={icon} className={style.icon} />
    </a>
  );
};

export default memo(SocialItem);
