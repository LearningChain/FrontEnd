import styled from 'styled-components';
import {InfoCardProps} from './InfoCard';

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

export const Layout = styled.li<InfoCardProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 80px;
  padding: 0 10px;
  margin: 0;
  background: ${(props) => backgroundColor[props.theme]};
  list-style: none;
  border-radius: 8px;
  color: ${(props) => textColor[props.theme]};
  width: 240px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserId = styled.span<InfoCardProps>`
  padding-left: 4px;
  color: ${(props) => textColor[props.theme]};
  font-size: 1px;
  font-weight: bold;
  line-height: 12px;
`;

export const UserDescription = styled.span<InfoCardProps>`
  padding: 4px 4px;
  color: ${(props) => textColor[props.theme]};
  font-size: 1px;
  font-weight: 100;
  line-height: 12px;
`;

export const UserInfo = styled.span<InfoCardProps>`
  padding-top: 10px;
  color: ${(props) => textColor[props.theme]};
  font-size: 1px;
  font-weight: 100;
  line-height: 12px;
`;

export const ContentsCount = styled.span<InfoCardProps>`
  padding: 2px 4px;
  color: ${(props) => textColor[props.theme]};
  font-size: 1px;
  font-weight: 100;
  line-height: 12px;
`;

export const ReccomandsCount = styled.span<InfoCardProps>`
  padding: 2px 4px;
  color: ${(props) => textColor[props.theme]};
  font-size: 1px;
  font-weight: 100;
  line-height: 12px;
`;

export const ButtonBox = styled.div`
  height: 70%;
`;