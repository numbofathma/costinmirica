'use client';

import React, { FC } from 'react';
import { useFormStatus } from 'react-dom';
import CustomButton from '@/components/CustomButton';
import Loader from '@/components/Loader';

interface IFormButtonProps {
  type: 'reset' | 'submit' | 'button';
  text?: string;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const FormButton: FC<IFormButtonProps> = ({ text, children, onClick, type = 'button', disabled = false }) => {
  const { pending } = useFormStatus();

  return (
    <CustomButton type={type} disabled={pending || disabled} onClick={onClick}>
      {text && <div className='mr-2'>{text}</div>}
      {pending ? <Loader width={5} height={5} className='fill-teal-700 text-white' /> : children}
    </CustomButton>
  );
};

export default FormButton;
