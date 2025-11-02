import React from 'react';

interface IHeader {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

const Header = ({ level = 1, className, children }: IHeader) => React.createElement(`h${level}`, { className: `font-light ${className}` }, children);

export default Header;
