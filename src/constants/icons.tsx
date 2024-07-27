import React from 'react';
import { SvgIcons } from '@/constants/enums';

export const SvgIconsList = (icon: SvgIcons, className = '', stroke = 'currentColor') => {
  switch (icon) {
    case SvgIcons.plane:
      return (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke={stroke} className={className}>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
          />
        </svg>
      );
    case SvgIcons.follow:
      return (
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke={stroke} className={className}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5' />
        </svg>
      );
    case SvgIcons.alert:
      return (
        <svg className={className} aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
          <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
        </svg>
      );
  }
};

export const MetadataIconSizes = {
  apple: [57, 60, 72, 76, 114, 120, 144, 152, 167, 180],
  icon: [16, 32, 96, 192],
};
