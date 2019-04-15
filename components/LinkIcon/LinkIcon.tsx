import * as React from 'react';
import Tooltip from '../Tooltip/Tooltip';
import {FaIconWrapper} from './style';
import FaIcon from '../FaIcon';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {isMobile} from 'react-device-detect';

interface IconProps {
    id: string;
    title: string;
    icon: IconDefinition;
    url: string;
}

const LinkIcon = (props: IconProps) => {
    const Link = (
        <a href={props.url} title={props.title} target='_blank'>
            <FaIcon
                icon={props.icon}
                className='huge'
            />
        </a>
    );

    return (
        <FaIconWrapper>
            {
                !isMobile ?
                    <Tooltip
                        id={props.id}
                        title={props.title}
                        type='light'
                        effect='solid'
                        place='bottom'
                    >
                        {Link}
                    </Tooltip>
                    :
                    Link
            }
        </FaIconWrapper>
    );
};

export default LinkIcon;
