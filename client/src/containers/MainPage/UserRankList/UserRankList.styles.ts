import styled from 'styled-components';

export const Layout = styled.section`
  width: 936px;
  @media (max-width: 936px) {
    width: 100%;
  }
`;

export const UserList = styled.ul`
  padding: 0;
  margin: auto;
  li + li {
    margin: 20px 0 0 0;
  }
`;
