import React, { memo } from 'react';
import { useFormStatus } from 'react-dom';

interface ICustomTextareaProps {
  id: string;
  name: string;
  value?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CustomTextarea = ({
  label,
  id,
  placeholder,
  name,
  value,
  onChange,
  error = '',
  disabled = false,
  className = '',
  onBlur,
}: ICustomTextareaProps) => {
  const { pending } = useFormStatus();

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className='mb-2 block cursor-pointer text-xs font-bold uppercase tracking-wide text-teal-700'>
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        id={id}
        name={name}
        className='mb-3 block w-full resize-none appearance-none rounded border border-gray-300 px-4 py-3 leading-tight text-gray-700 focus:border-teal-700 focus:bg-white focus:outline-none disabled:bg-gray-300'
        value={value}
        autoComplete='off'
        disabled={disabled || pending}
        onChange={onChange}
        onBlur={onBlur}
        rows={10}
      />
      <div className='bold text-xs text-red-500' style={{ height: '1rem', visibility: error ? 'visible' : 'hidden' }}>
        {error}
      </div>
    </div>
  );
};

export default memo(CustomTextarea);
