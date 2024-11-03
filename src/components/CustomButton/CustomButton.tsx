import React, { FC } from 'react';
import style from './CustomButton.module.scss';

interface ICustomButtonProps {
  type: 'reset' | 'submit' | 'button';
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const CustomButton: FC<ICustomButtonProps> = ({ children, onClick, type = 'button', disabled = false }) => (
  <button type={type} disabled={disabled} className={`button-base ${style.button}`} onClick={onClick}>
    {children}
  </button>
);

export default CustomButton;
