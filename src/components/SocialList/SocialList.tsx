import * as React from 'react';
import LazyLoad from 'react-lazyload';
import LinkIcon from '../LinkIcon';
import { SocialItem } from '../../interfaces/interfaces';

interface SocialListProps {
  socials: SocialItem[];
}

const SocialList = (props: SocialListProps) => (
  <>
    <h2 className="mt-4">I'm social too</h2>
    <div>
      <LazyLoad>
        {props.socials.map((item: SocialItem) => (
          <LinkIcon key={item.id} {...item} />
        ))}
      </LazyLoad>
    </div>
  </>
);

export default SocialList;
