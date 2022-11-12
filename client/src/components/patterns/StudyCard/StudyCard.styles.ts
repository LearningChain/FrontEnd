import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  width: 320px;
  /* height: 170px; */
  background: #FFFFFF;
  border-radius: 10px;
  border: 1px solid #e7e7e7;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Header = styled.div`
  display: flex;
  gap: 10px;
`;

export const DueDate = styled.div`
  display: flex;
  gap: 10px;
`;

export const KeywordBox = styled.div`
`;

export const TagBox = styled.div`
  display: flex;
  gap: 15px;
`;

export const Title = styled.div`
  font-size: 16px;
`;

export const Description = styled.div`
  font-size: 14px;
`;
