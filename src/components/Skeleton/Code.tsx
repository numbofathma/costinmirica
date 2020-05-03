import styled from 'styled-components';

export const Code = styled.pre`
  padding: 0.2rem 0.5rem;
  margin: 3rem 0.2rem;
  border: 1px solid #e1e1e1;
  border-radius: 4px;

  & > code {
    display: block;
    padding: 1rem 1.5rem;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
`;
