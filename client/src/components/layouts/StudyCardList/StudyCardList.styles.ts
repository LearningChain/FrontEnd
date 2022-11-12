import styled from 'styled-components';

export const Layout = styled.ul`
  display: flex;
  gap: 27px;
  padding: 0;
  margin: 0;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
