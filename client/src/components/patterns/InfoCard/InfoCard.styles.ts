import styled from 'styled-components';

export const Layout = styled.li`
  list-style: none;
`;

export const MobileSubLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  margin: 0;
`;

export const MobileText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 15px;
  height: 40px;
`;

export const Rank = styled.div`
  width: 20px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px 0 0;
`;
export const SubLayout = styled.div`
  display: flex;
  width: 270px;
  height: 73px;
  padding: 20px 10px;
  margin: 0;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
`;

export const Infos = styled.div`
  width: 130px;
`;

export const TopInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 0 3px 0;
`;

export const BottomInfo = styled.div``;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10px;
`;

export const UserNickname = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 5px 0;
`;

export const UserDescription = styled.span`
  font-size: 14px;
  color: #808080;
  margin: 0 0 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const UserCountInfo = styled.span`
  font-size: 14px;
  color: #808080;
`;

export const ContentsCount = styled.span`
  margin: 0 10px 0 0;
`;

export const ReccomandsCount = styled.span``;

export const ButtonBox = styled.div`
  margin: 0 0 0 auto;
`;
