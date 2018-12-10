import * as React from "react";
import Tooltip from "../Tooltip/Tooltip";
import {FaIconWrapper} from "./style";
import FaIcon from "../FaIcon";
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

interface IconProps {
    id: string;
    title: string;
    icon: IconDefinition
    url: string
}

const LinkIcon = (props: IconProps) => (
    <FaIconWrapper>
        <Tooltip
            id={props.id}
            title={props.title}
            type="light"
            effect="solid"
            place="bottom"
        >
            <a href={props.url} title={props.title}>
                <FaIcon
                    icon={props.icon}
                    className="huge"
                />
            </a>
        </Tooltip>
    </FaIconWrapper>
);

export default LinkIcon;