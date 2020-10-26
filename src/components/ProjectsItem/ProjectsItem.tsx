import React, { FC } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';

interface IProjectItemProps {
  title: string;
  url: string;
  icon: string;
  text: string;
  tabIndex: number;
  className?: string;
}

const ProjectsItem: FC<IProjectItemProps> = ({ url, title, tabIndex, icon, text, className = '' }) => (
  <div className='card flex transform flex-col rounded border border-gray-300 p-5 shadow-md transition duration-500 hover:border-teal-700'>
    <div className='flex-grow'>
      <div className='mb-5 flex justify-self-center'>
        <a href={url} title={title} target='_blank' rel='noopener' tabIndex={tabIndex}>
          <Header level={3} className='mr-2 flex flex-grow items-center text-lg'>
            <Image width={72} height={72} className='mr-3 rounded-lg border border-gray-300' src={icon} alt={title} /> {title}
          </Header>
        </a>
      </div>
      <div className=''>
        <p className='text-sm font-light'>{text}</p>
      </div>
    </div>
    <div className='mt-5 flex-shrink'>
      <a
        href={url}
        title={title}
        target='_blank'
        rel='noopener'
        tabIndex={tabIndex}
        className='inline-flex items-center rounded border border-teal-700 px-3 py-2 text-center text-sm font-medium text-teal-700 transition duration-500 hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-0'
      >
        <span className='text-xs'>MORE </span>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-4 w-4'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5' />
        </svg>
      </a>
    </div>
  </div>
);

export default ProjectsItem;
