import * as React from 'react';
import ReactTooltip from 'react-tooltip'

const Tooltip = (props) => {
    return (
        <React.Fragment>
            <span data-tip="true" data-for={props.id}>{props.children}</span>
            <ReactTooltip id={props.id} type="light" place="bottom" effect="solid">
                {props.title}
            </ReactTooltip>
        </React.Fragment>
    )
};

export default Tooltip;