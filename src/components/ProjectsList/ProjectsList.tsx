import * as React from 'react';
import { UnOrderedList } from '@components/Skeleton';
import ProjectsItem from '@components/ProjectsItem/ProjectsItem';
import { ProjectItem } from '@interfaces/interfaces';

interface ProjectListProps {
  projects: ProjectItem[];
}

const ProjectsList = (props: ProjectListProps) => (
  <>
    <h2>Some of the projects I've done</h2>

    <UnOrderedList className="mt-3">
      {props.projects.map((project: ProjectItem) => (
        <ProjectsItem key={project.title} {...project} tabIndex={0} />
      ))}
    </UnOrderedList>
  </>
);

export default ProjectsList;
