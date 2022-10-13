import styled from 'styled-components';
import {InfoCardProps} from './InfoCard';

export const Layout = styled.li`
  display: flex;
  width: 270px;
  height: 73px;
  padding: 20px 10px;
  margin: 0;
  list-style: none;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10px;
`;

export const UserNickname = styled.span<InfoCardProps>`
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 5px 0;
`;

export const UserDescription = styled.span<InfoCardProps>`
  font-size: 14px;
  color: #808080;
  margin: 0 0 10px 0;
`;

export const UserCountInfo = styled.span<InfoCardProps>`
  font-size: 14px;
  color: #808080;
`;

export const ContentsCount = styled.span<InfoCardProps>`
  margin: 0 10px 0 0;
`;

export const ReccomandsCount = styled.span<InfoCardProps>``;

export const ButtonBox = styled.div`
  height: 70%;
  margin: 0 0 0 auto;
`;
