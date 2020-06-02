import * as React from 'react';
import { ListItem } from '@components/Skeleton';
import { ProjectIcon, ProjectIconWrapper } from './style';

interface ProjectItemProps {
  title: string;
  url: string;
  icon: string;
  text: string;
  tabIndex: number;
}

const ProjectsItem = (props: ProjectItemProps) => (
  <ListItem className="mt-2">
    <a href={props.url} title={props.title} target="_blank" rel="noreferrer noopener" tabIndex={props.tabIndex}>
      <ProjectIconWrapper>
        <ProjectIcon icon={props.icon} />
        {props.title}
      </ProjectIconWrapper>
    </a>
    <p>
      {props.text}
      {' '}
      <a href={props.url} title={props.title} target="_blank" rel="noreferrer noopener" tabIndex={props.tabIndex}>
        Try it!
      </a>
    </p>
  </ListItem>
);

export default ProjectsItem;
