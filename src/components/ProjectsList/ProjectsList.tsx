import React from 'react';
import Header from '@/components/Header';
import ProjectsItem from '@/components/ProjectsItem';
import { IProject } from '@/interfaces/app';
import { LangVars } from '@/constants/lang';
import { getProjects } from '@/helpers/api';

const ProjectsList = async () => {
  const { projects = [] } = await getProjects();
  const { sectionTitle } = LangVars.ProjectsList;

  return (
    <>
      <Header level={2} className='mb-10 text-xl md:text-2xl'>
        {sectionTitle}
        <span className='text-teal-700'>
          <i className='text-blink'>_</i>
        </span>
      </Header>

      <div className='mt-4 w-full'>
        <div className='grid auto-rows-max grid-cols-1 gap-10'>
          {projects.map((project: IProject) => {
            return <ProjectsItem key={project.title} {...project} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectsList;
