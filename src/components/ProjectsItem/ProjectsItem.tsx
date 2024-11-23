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
  className?: string;
}

const ProjectsItem: FC<IProjectItemProps> = ({ url, title, icon, text }) => {
  const { itemAlt, itemTitle, itemActionText } = LangVars.ProjectsList;

  return (
    <div className='card flex transform flex-col rounded border border-gray-300 p-5 shadow-md hover:border-teal-700'>
      <div className='flex-grow'>
        <div className='mb-5'>
          <a href={`${url}?referrer=cv`} title={title} target='_blank' rel='noreferrer'>
            <Header level={3} className='mr-2 flex flex-grow items-center text-base md:text-lg'>
              <Image
                width={72}
                height={72}
                className='mr-3 max-h-[72px] rounded-lg border border-gray-300 bg-teal-700'
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
          className='button-base inline-flex items-center px-2 py-1'
        >
          <span className='text-xs'>{itemActionText}</span>
          <SvgIcon icon={SvgIcons.follow} />
        </a>
      </div>
    </div>
  );
};

export default memo(ProjectsItem);
