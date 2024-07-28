import React, { FC, memo } from 'react';
import { useFormStatus } from 'react-dom';

interface ICustomInputProps {
  id: string;
  name: string;
  type: 'text' | 'email' | 'password' | 'number' | 'phone';
  value?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: FC<ICustomInputProps> = ({
  label,
  id,
  placeholder,
  name,
  type = 'text',
  value,
  onChange,
  error = '',
  disabled = false,
  className = '',
  onBlur,
}) => {
  const { pending } = useFormStatus();

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className='mb-2 block cursor-pointer text-xs font-bold uppercase tracking-wide text-teal-700'>
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        id={id}
        name={name}
        className='mb-3 block w-full appearance-none rounded border border-gray-300 px-4 py-3 leading-tight text-gray-700 focus:border-teal-700 focus:bg-white focus:outline-none disabled:bg-gray-300'
        type={type}
        value={value}
        autoComplete='off'
        disabled={disabled || pending}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className='bold text-xs text-red-500' style={{ height: '1rem', visibility: error ? 'visible' : 'hidden' }}>
        {error}
      </div>
    </div>
  );
};

export default memo(CustomInput);
