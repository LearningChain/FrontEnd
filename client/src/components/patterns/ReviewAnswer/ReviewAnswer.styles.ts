import styled from 'styled-components';

export const Layout = styled.div`
  width: calc(100% - 40px);
  height: 120px;
  background: #f6f6f6;
  position: relative;
  padding: 30px 20px 20px 20px;
  display: flex;
  margin:0 0 20px 0;
  ::before {
    border-color: #f6f6f6 transparent;
    border-style: solid;
    border-width: 0 7px 10px 7px;
    content: '';
    display: block;
    right: 75px;
    position: absolute;
    top: -10px;
    width: 0;
    z-index: 0;
  }
`;

export const TopInfo = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  button {
    margin-left: auto;
  }
`;

export const MainInfo = styled.div`
  padding-left: 10px;
`;

export const NickName = styled.div``;

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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button{
    margin-right:10px;
  }
`;

export const Date = styled.div`
  color: #b3b3b3;
  margin-left: auto;
`;
