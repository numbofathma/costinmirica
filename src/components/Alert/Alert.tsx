import { AlertTypes } from '@/interfaces/general';
import React, { FC, ReactNode } from 'react';

interface IAlertProps {
  children: ReactNode;
  type?: AlertTypes;
  className?: string;
}

const classNames: Record<AlertTypes, string> = {
  [AlertTypes.INFO]: 'border-blue-300 bg-blue-50 p-4 text-sm text-blue-800',
  [AlertTypes.DANGER]: 'border-red-300 bg-red-50 p-4 text-sm text-red-800',
  [AlertTypes.SUCCESS]: 'border-green-300 bg-green-50 p-4 text-sm text-green-800',
  [AlertTypes.WARNING]: 'border-yellow-300 bg-yellow-50 p-4 text-sm text-yellow-800',
  [AlertTypes.DEFAULT]: ' border-gray-300 bg-gray-50 p-4 text-sm text-gray-800',
};

const Alert: FC<IAlertProps> = ({ children, type = AlertTypes.DEFAULT, className = '' }) => {
  return (
    <div className={`mb-4 flex items-center rounded-lg border ${className} ${classNames[type]}`} role='alert'>
      <svg
        className='me-3 inline h-4 w-4 flex-shrink-0'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 20 20'
      >
        <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
      </svg>
      <span className='sr-only'>Action message</span>
      <div>{children}</div>
    </div>
  );
};

export default Alert;
