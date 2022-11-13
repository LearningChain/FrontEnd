import styled from 'styled-components';

export const Layout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const SubLayout = styled.div`
  position: fixed;
  bottom: 0;
  width: calc(100% - 40px);
  background: white;
  border-radius: 10px 10px 0 0;
  padding: 20px;
  z-index: 1;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  padding: 20px 0 20px 0;
`;

export const SubBlock = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 40px 0;
`;

export const SubTitle = styled.div`
  margin: 0 0 10px 0;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;
