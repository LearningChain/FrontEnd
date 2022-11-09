import styled from 'styled-components';

export const Layout = styled.div<{active: boolean}>`
  width: calc(100% - 40px);
  margin: 0 20px 0 20px;
  padding: 30px 0 30px 0;
  position: relative;
  display: flex;
  border-bottom: 1px solid #e7e7e7;
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
`;

export const TextBox = styled.div`
  width: calc(100% - 115px);
  margin: 0 0 0 20px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  line-height: 30px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
`;

export const DateTime = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #b3b3b3;
  float: left;
  margin: 20px 0 0 0;
`;
