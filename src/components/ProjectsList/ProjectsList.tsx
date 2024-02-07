import React, { FC } from 'react';
import Header from '@/components/Header';
import ProjectsItem from '@/components/ProjectsItem';
import { IProjectItem } from '@/interfaces/app';
import { LangVars } from '@/constants/lang';

interface IProjectListProps {
  projects: IProjectItem[];
}

const ProjectsList: FC<IProjectListProps> = ({ projects }) => {
  const { sectionTitle } = LangVars.ProjectsList;

  return (
    <>
      <Header level={2} className='text-xl md:text-2xl'>
        {sectionTitle}
        <span className='text-teal-700'>
          <i className='text-blink'>_</i>
        </span>
      </Header>

      <div className='mt-4 w-full'>
        <div className='grid auto-rows-max grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project: IProjectItem) => (
            <ProjectsItem key={project.title} {...project} className='mt-5' />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsList;
