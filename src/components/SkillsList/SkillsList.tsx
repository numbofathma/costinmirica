import * as React from 'react';
import { Label } from './style';

interface SkillListProps {
  skills: string[];
}

const SkillsList = (props: SkillListProps) => (
  <>
    <h2>I worked with...</h2>
    <div className="mt-1">
      {props.skills.map((item, key) => (
        <Label key={key}>{item}</Label>
      ))}
    </div>
  </>
);

export default SkillsList;
