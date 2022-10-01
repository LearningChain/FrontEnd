import styled from 'styled-components';

export const Layout = styled.section`
  width: 1200px;
  margin: auto;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const TitleBlock = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserList = styled.ul`
  display: flex;
  overflow: hidden;
  padding: 0;
  li + li {
    margin-left: 30px;
  }
  margin: auto;
  @media (max-width: 1200px) {
    width: 790px;
  }
  @media (max-width: 790px) {
    width: 380px;
  }
`;
