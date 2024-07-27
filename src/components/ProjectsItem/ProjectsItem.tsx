import React, { FC, memo } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import SvgIcon from '@/components/SvgIcon';
import { SvgIcons } from '@/constants/enums';
import { LangVars } from '@/constants/lang';

interface IProjectItemProps {
  title: string;
  url: string;
  icon: string;
  text: string;
  isLoading?: boolean;
  className?: string;
}

const ProjectsItem: FC<IProjectItemProps> = ({ url, title, icon, text, isLoading = false }) => {
  const { itemAlt, itemTitle, itemActionText } = LangVars.ProjectsList;

  if (isLoading) {
    return (
      <div className='card flex transform animate-pulse flex-col rounded border border-gray-300 p-5 shadow-md transition duration-500 hover:border-teal-700'>
        <div className='flex-grow'>
          <div className='mb-5 flex justify-self-center'>
            <div className='mr-3 h-16 w-16 rounded-lg border border-gray-300 bg-gray-200'></div>
            <div className='mr-2 mt-5 flex h-6 w-1/2 flex-grow items-center rounded bg-gray-200 text-base font-light md:text-lg'></div>
          </div>
          <div className='mb-2 mt-4'>
            <div className='my-2 h-4 w-full rounded bg-gray-200 text-sm font-light'></div>
            <div className='my-2 h-4 w-2/3 rounded bg-gray-200 text-sm font-light'></div>
          </div>
          <div className='my-2'>
            <div className='my-2 h-4 w-full rounded bg-gray-200 text-sm font-light'></div>
            <div className='my-2 h-4 w-2/3 rounded bg-gray-200 text-sm font-light'></div>
          </div>
          <div className='mb-2 mt-4'>
            <div className='my-2 h-4 w-full rounded bg-gray-200 text-sm font-light'></div>
            <div className='my-2 h-4 w-2/3 rounded bg-gray-200 text-sm font-light'></div>
          </div>
          <div className='my-2'>
            <div className='my-2 h-4 w-full rounded bg-gray-200 text-sm font-light'></div>
            <div className='my-2 h-4 w-2/3 rounded bg-gray-200 text-sm font-light'></div>
          </div>
        </div>
        <div className='mt-5 flex-shrink'>
          <div className='inline-flex items-center rounded border border-teal-700 bg-gray-200 px-3 py-2 text-center text-sm font-medium text-teal-700'>
            <span className='text-xs'>{itemActionText}</span>
            <SvgIcon icon={SvgIcons.follow} className='h-4 w-4' />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='card flex transform flex-col rounded border border-gray-300 p-5 shadow-md transition duration-500 hover:border-teal-700'>
      <div className='flex-grow'>
        <div className='mb-5 flex justify-self-center'>
          <a href={`${url}?referrer=cv`} title={title} target='_blank' rel='noreferrer'>
            <Header level={3} className='mr-2 flex flex-grow items-center text-base md:text-lg'>
              <Image
                width={72}
                height={72}
                className='mr-3 rounded-lg border border-gray-300'
                src={icon}
                alt={`${itemAlt} "${title}"`}
                priority={false}
              />
              {title}
            </Header>
          </a>
        </div>
        <div className=''>
          <p className='text-sm font-light'>{text}</p>
        </div>
      </div>
      <div className='mt-5 flex-shrink'>
        <a
          href={`${url}?referrer=cv`}
          title={`${itemTitle} "${title}"`}
          target='_blank'
          rel='noreferrer'
          className='inline-flex items-center rounded border border-teal-700 px-3 py-2 text-center text-sm font-medium text-teal-700 transition duration-500 hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-0'
        >
          <span className='text-xs'>{itemActionText}</span>
          <SvgIcon icon={SvgIcons.follow} className='h-4 w-4' />
        </a>
      </div>
    </div>
  );
};

export default memo(ProjectsItem);
