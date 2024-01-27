import React, { FC } from 'react';
import { SvgIcons } from '@/interfaces/general';
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

export default SvgIcon;
