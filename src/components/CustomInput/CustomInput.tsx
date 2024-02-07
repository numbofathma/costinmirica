import React, { FC } from 'react';

interface ICustomInputProps {
  type: 'text' | 'email' | 'password' | 'number' | 'phone';
  id: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  label?: string;
  error?: string;
  className?: string;
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
}) => (
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
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <div className='bold text-xs text-red-500'>{error}</div>}
  </div>
);

export default CustomInput;
