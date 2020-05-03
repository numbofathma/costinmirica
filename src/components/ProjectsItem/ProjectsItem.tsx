import * as React from 'react';
import { ListItem } from '../Skeleton';
import { ProjectIcon, ProjectIconWrapper } from './style';

interface ProjectItemProps {
  title: string;
  url: string;
  icon: string;
  text: string;
}

const ProjectsItem = (props: ProjectItemProps) => (
  <ListItem className="mt-2">
    <a href={props.url} title={props.title} target="_blank">
      <ProjectIconWrapper>
        <ProjectIcon icon={props.icon} />
        {props.title}
      </ProjectIconWrapper>
    </a>
    <p>
      {props.text}{' '}
      <a href={props.url} title={props.title} target="_blank">
        Try it!
      </a>
    </p>
  </ListItem>
);

export default ProjectsItem;
