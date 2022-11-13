import styled from 'styled-components';

export const Layout = styled.section`
  position: absolute;
  width: 936px;
  top: 0;
  left: 0;
  background: white;
  @media (max-width: 936px) {
    width: 100%;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #eeeeee;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

export const DummyBox = styled.div``;

export const UserList = styled.ul`
  padding: 20px;
  margin: auto;
  li + li {
    margin: 20px 0 0 0;
  }
`;
