import React, { FC } from 'react';
import style from './CustomButton.module.scss';

interface ICustomButtonProps {
  text: string;
  type: 'reset' | 'submit' | 'button';
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const CustomButton: FC<ICustomButtonProps> = ({ text, children, onClick, type = 'button', disabled = false }) => (
  <button type={type} disabled={disabled} className={style.button} onClick={onClick}>
    <div className='mr-2'>{text}</div> {children}
  </button>
);

export default CustomButton;
