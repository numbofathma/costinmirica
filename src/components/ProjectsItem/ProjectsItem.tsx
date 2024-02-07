import React, { FC } from 'react';
import Image from 'next/image';
import { LangVars } from '@/constants/lang';
import Header from '@/components/Header';
import SvgIcon from '@/components/SvgIcon';
import { SvgIcons } from '@/interfaces/app';

interface IProjectItemProps {
  title: string;
  url: string;
  icon: string;
  text: string;
  className?: string;
}

const ProjectsItem: FC<IProjectItemProps> = ({ url, title, icon, text }) => {
  const { itemAlt, itemTitle, itemActionText } = LangVars.ProjectsList;

  return (
    <div className='card flex transform flex-col rounded border border-gray-300 p-5 shadow-md transition duration-500 hover:border-teal-700'>
      <div className='flex-grow'>
        <div className='mb-5 flex justify-self-center'>
          <a href={url} title={title} target='_blank' rel='noopener noreferrer'>
            <Header level={3} className='mr-2 flex flex-grow items-center text-base md:text-lg'>
              <Image
                width={72}
                height={72}
                className='mr-3 rounded-lg border border-gray-300'
                src={icon}
                alt={`${itemAlt} ${title}`}
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
          href={url}
          title={`${itemTitle} ${title}`}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center rounded border border-teal-700 px-3 py-2 text-center text-sm font-medium text-teal-700 transition duration-500 hover:bg-teal-700 hover:text-white focus:outline-none focus:ring-0'
        >
          <span className='text-xs'>{itemActionText}</span>
          <SvgIcon icon={SvgIcons.follow} className='h-4 w-4' />
        </a>
      </div>
    </div>
  );
};

export default ProjectsItem;
