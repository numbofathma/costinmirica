import * as React from 'react';
import ReactTooltip from 'react-tooltip';

interface TooltipProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Tooltip = (props: TooltipProps) => (
  <>
    <span data-tip="true" data-for={props.id}>
      {props.children}
    </span>
    <ReactTooltip id={props.id} type="light" place="bottom" effect="solid">
      {props.title}
    </ReactTooltip>
  </>
);

export default Tooltip;
