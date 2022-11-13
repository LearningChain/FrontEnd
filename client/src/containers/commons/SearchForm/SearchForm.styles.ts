import styled from 'styled-components';

export const Layout = styled.div`
  padding: 20px;
`;

export const TitleBox = styled.div`
  margin: 0 0 20px 0;
`;

export const InputBox = styled.div`
  margin: 0 0 30px 0;
`;
export const SubTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
`;
export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const LatestSearchBox = styled.div`
  margin: 0 0 40px 0;
`;

export const LatestSearchList = styled.div`
  display: flex;
  gap: 10px;
`;

export const LatestKeywordBox = styled.div`
  border-radius: 73px;
  padding: 5px 10px 5px 10px;
  border: 1px solid #e7e7e7;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopularSearchBox = styled.div`
  gab: 10px;
`;

export const PopulstSearchList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const PopularKeywordBox = styled.div`
  width: calc((100% - 94px) / 2);
  height: 30px;
  display: flex;
  align-items: center;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  padding: 10px 20px 10px 20px;
  gap: 10px;
`;

export const RankChange = styled.div`
  margin: 0 0 0 auto;
`;
