import styled from 'styled-components';

export const Layout = styled.section`
  width: 936px;
  margin: auto;
  @media (max-width: 936px) {
    width: 100%;
  }
`;
export const DummyBox = styled.div`
  width: 55px;
  height: 23px;
  @media (max-width: 600px) {
    display: none;
  }
`;
export const TitleBlock = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 15px;
  @media (max-width: 600px) {
    margin: 0;
    font-size: 20px;
  }
`;

export const UserList = styled.ul`
  display: flex;
  overflow-x: scroll;
  padding: 0;
  li + li {
    margin-left: 30px;
  }
  margin: auto;
  @media (max-width: 600px) {
    li + li {
      margin-left: 10px;
    }
  }
`;
