import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

const FaIcon = styled(FontAwesomeIcon)`
  color: #e6e6e6;
  cursor: pointer;
  transition: all 1s;
  ${!isMobile
  && `
        &:hover {
            color: #FC3565;
        }`}
`;

export default FaIcon;
