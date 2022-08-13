import styled from 'styled-components';

export const Layout = styled.div`
  width: 320px;
  height: 360px;
`;

export const TopInfo = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  button {
    margin-left: auto;
  }
`;

export const NickName = styled.p`
  margin-left: 10px;
`;
export const MainInfo = styled.div`
  padding-left: 40px;
`;

export const SubTitle = styled.h1`
  font-weight: 600;
  font-size: 14px;
`;

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 30px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const BottomInfo = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Date = styled.div`
  color: #b3b3b3;
`;
