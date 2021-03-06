import styled from 'styled-components';

const BaseHeading = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  letter-spacing: -0.1rem;
  text-transform: ${(props) => (props.big ? 'uppercase' : '')};
  margin: 2rem 0 1rem 0;
`;

/* Header components, from H1 through H6 */
export const H1 = styled(BaseHeading)`
  @media (min-width: 550px) {
    font-size: 5rem;
  } /* Larger than phablet */
`;

export const H2 = styled(BaseHeading)`
  font-size: 3.6rem;
  line-height: 1.25;
  letter-spacing: -0.1rem;
  @media (min-width: 550px) {
    font-size: 4.2rem;
  } /* Larger than phablet */
`;

export const H3 = styled(BaseHeading)`
  font-size: 3rem;
  line-height: 1.3;
  letter-spacing: -0.1rem;
  @media (min-width: 550px) {
    font-size: 3.6rem;
  } /* Larger than phablet */
`;

export const H4 = styled(BaseHeading)`
  font-size: 2.4rem;
  line-height: 1.35;
  letter-spacing: -0.08rem;
  @media (min-width: 550px) {
    font-size: 3rem;
  } /* Larger than phablet */
`;

export const H5 = styled(BaseHeading)`
  font-size: 1.8rem;
  line-height: 1.5;
  letter-spacing: -0.05rem;
  @media (min-width: 550px) {
    font-size: 2.4rem;
  } /* Larger than phablet */
`;

export const H6 = styled(BaseHeading)`
  font-size: 1.5rem;
  line-height: 1.6;
  letter-spacing: 0rem;
  @media (min-width: 550px) {
    font-size: 1.5rem;
  } /* Larger than phablet */
`;

/* Bold text component */
export const Strong = styled.strong`
  font-weight: 600;
`;

/* Anchor component for links outside of react router */
export const Anchor = styled.a`
  color: #1eaedb;
  text-decoration: none;

  :hover {
    color: #0fa0ce;
    text-decoration: none;
  }
`;
