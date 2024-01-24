import React, { FC } from 'react';

interface IHeader {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

const Header: FC<IHeader> = ({ level = 1, className, children }) => {
  return React.createElement(`h${level}`, { className: `font-light ${className}` }, children);
};

export default Header;
