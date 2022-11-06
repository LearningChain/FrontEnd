import styled from 'styled-components';

export const Layout = styled.header`
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const IconBlock = styled.div`
  display: flex;
  margin: 0px 0px 0px auto;
  svg + svg {
    margin: 0 0 0 10px;
  }
`;

export const DesktopLayout = styled.header`
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  padding: 10px 20px 20px 20px;
  @media (min-width: 1240px) {
    width: 1200px;
    margin: auto;
  }
`;

export const NavBlock = styled.nav`
  display: flex;
  font-size: 14px;
  margin: 0px 0px 0px 20px;
  div {
    margin: 0px 0px 0px 25px;
  }
`;

export const RightBlock = styled.div`
  display: flex;
  margin: 0px 0px 0px auto;
  svg {
    margin: 0px 10px 0px 0px;
  }
  button {
    margin: 0px 10px 0px 0px;
  }
`;
