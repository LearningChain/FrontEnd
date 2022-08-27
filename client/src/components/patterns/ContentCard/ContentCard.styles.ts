import styled from 'styled-components';
import {ContentCardProps} from './ContentCard';

interface CardColorAtr {
    [light: string] :string;
    dark: string;
}

const textColor: CardColorAtr = {
  light: '#4A5056',
  dark: '#FFFFFF',
};

const backgroundColor: CardColorAtr = {
  light: '#eaeaea',
  dark: '#A4A4A4',
};

export const Layout = styled.li<ContentCardProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 125px;
  padding: 0 0;
  margin: 0;
  background: ${(props) => backgroundColor[props.theme]};
  list-style: none;
  border-radius: 8px;
  color: ${(props) => textColor[props.theme]};
  width: 324px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span<ContentCardProps>`
  color: ${(props) => textColor[props.theme]};
  font-size: 14px;
  font-weight: bold;
  line-height: 14px;
`;

export const Description = styled.span<ContentCardProps>`
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-top: 10px;
  color: ${(props) => textColor[props.theme]};
  font-size: 1px;
  font-weight: 100;
  line-height: 12px;
`;

export const Writer = styled.span<ContentCardProps>`
  padding-top: 10px;
  color: ${(props) => textColor[props.theme]};
  font-size: 1px;
  font-weight: 100;
  line-height: 12px;
`;
