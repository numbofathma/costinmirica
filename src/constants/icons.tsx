import { SvgIcons } from '@/interfaces/general';

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
  }
};
