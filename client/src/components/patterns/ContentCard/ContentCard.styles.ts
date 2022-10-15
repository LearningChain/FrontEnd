import styled from 'styled-components';
import {ContentCardProps} from './ContentCard';

export const Layout = styled.li<ContentCardProps>`
  display: flex;
  align-items: center;
  height: 125px;
  padding: 0 0;
  margin: 0;
  list-style: none;
  border: 1px solid #e7e7e7;
  border-radius: 10px;
  width: 324px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 85px;
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0 0 10px 0;
  font-size: 14px;
  font-weight: 600;
`;

export const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
  margin: 0 0 10px 0;
  color: #808080;
  font-size: 12px;
`;

export const Writer = styled.p`
  margin: 0;
  color: #808080;
  font-size: 12px;
`;
