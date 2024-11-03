import { FC, memo } from 'react';
import { SvgIcons } from '@/constants/enums';
import style from './SvgIcon.module.scss';

interface ISvgIconProps {
  icon?: SvgIcons;
  className?: string;
  style?: React.CSSProperties;
}

const SvgIcon: FC<ISvgIconProps> = ({ icon = SvgIcons.send, className = '', style: iconStyle }) => {
  if (!icon) {
    return null;
  }

  return (
    <span
      className={`${style.icon} ${className} svg-icon`}
      style={{
        maskImage: `url(/static/icons/${icon}.svg)`,
        WebkitMaskImage: `url(/static/icons/${icon}.svg)`,
        ...iconStyle,
      }}
    />
  );
};

export default memo(SvgIcon);
