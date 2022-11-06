import styled from 'styled-components';

export const Layout = styled.section`
  padding: 20px 0 20px 20px;
  width: calc(100% - 20px);
  margin: 0;
  @media (min-width: 1240px) {
    width: 1200px;
    margin: auto;
    padding: 20px 20px 20px 20px;
  }
`;

export const DummyBox = styled.div`
  width: 55px;
  height: 23px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 30px 0;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

export const ButtonWrap = styled.div`
  margin: 0 10px 0 0;
`;

export const UserList = styled.ul`
  display: flex;
  overflow-x: scroll;
  padding: 0;
  li + li {
    margin-left: 30px;
  }
  margin: auto;
`;
