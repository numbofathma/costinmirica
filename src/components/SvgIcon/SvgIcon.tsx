import { FC, memo } from 'react';
import { SvgIcons } from '@/constants/enums';
import { SvgIconsList } from '@/constants/icons';

interface ISvgIconProps {
  icon: SvgIcons;
  className?: string;
  fill?: string;
  strokeWidth?: string;
  stroke?: string;
}

const SvgIcon: FC<ISvgIconProps> = ({ icon = SvgIcons.plane, className = '' }) => {
  return SvgIconsList(icon, className);
};

export default memo(SvgIcon);
