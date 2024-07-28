import React, { FC } from 'react';
import { useFormStatus } from 'react-dom';
import Loader from '@/components/Loader';
import style from './CustomButton.module.scss';

interface ICustomButtonProps {
  text: string;
  type: 'reset' | 'submit' | 'button';
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const CustomButton: FC<ICustomButtonProps> = ({ text, children, onClick, type = 'button', disabled = false }) => {
  const { pending } = useFormStatus();

  return (
    <button type={type} disabled={pending || disabled} className={style.button} onClick={onClick}>
      <div className='mr-2'>{text}</div>
      {pending ? <Loader width={5} height={5} /> : children}
    </button>
  );
};

export default CustomButton;
