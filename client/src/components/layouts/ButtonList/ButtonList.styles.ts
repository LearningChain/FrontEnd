import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  margin: 0 0 20px 0;
  button + button {
    margin: 0 0 0 10px;
  }
  white-space: nowrap;
  overflow-x: scroll;
  @media (min-width: 768px) {
    justify-content: center;
  }
`;
