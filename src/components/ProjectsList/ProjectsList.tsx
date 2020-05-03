import * as React from 'react';
import { UnOrderedList } from '../Skeleton';
import ProjectsItem from '../ProjectsItem/ProjectsItem';
import { ProjectItem } from '../../interfaces/interfaces';

interface ProjectListProps {
  projects: ProjectItem[];
}

const ProjectsList = (props: ProjectListProps) => (
  <>
    <h2>Some of the projects I've done</h2>

    <UnOrderedList className="mt-3">
      {props.projects.map((project: ProjectItem) => (
        <ProjectsItem key={project.title} {...project} />
      ))}
    </UnOrderedList>
  </>
);

export default ProjectsList;
