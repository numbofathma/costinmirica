import React, { FC } from 'react';
import Header from '@/components/Header';
import ProjectsItem from '@/components/ProjectsItem';
import { IProjectItem } from '@/interfaces/general';

interface IProjectListProps {
  projects: IProjectItem[];
}

const ProjectsList: FC<IProjectListProps> = ({ projects }) => (
  <>
    <Header level={2} className='text-base sm:text-lg md:text-2xl'>
      {`Some of my personal projects `}
      <span className='text-teal-700'>
        <i className='text-blink'>_</i>
      </span>
    </Header>

    <div className='mt-4 w-full'>
      <div className='grid auto-rows-max grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
        {projects.map((project: IProjectItem, index: number) => (
          <ProjectsItem key={project.title} tabIndex={index} {...project} className='mt-5' />
        ))}
      </div>
    </div>
  </>
);

export default ProjectsList;
