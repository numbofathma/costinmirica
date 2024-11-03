import React, { FC, ReactNode } from 'react';
import SvgIcon from '@/components/SvgIcon';
import { AlertTypes, SvgIcons } from '@/constants/enums';

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

const Alert: FC<IAlertProps> = ({ children, type = AlertTypes.DEFAULT, className = '' }) => (
  <div className={`mb-4 flex items-center rounded-lg border ${className} ${classNames[type]}`} role='alert'>
    <SvgIcon icon={SvgIcons.alert} className='me-3 inline h-4 w-4 flex-shrink-0 bg-current' />
    <span className='sr-only'>Action message</span>
    <div>{children}</div>
  </div>
);

export default Alert;
