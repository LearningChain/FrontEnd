import styled from 'styled-components';
import {ActivityCardProps, ActivityCardItemProps} from './ActivityCard';

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

export const Layout = styled.li<ActivityCardProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 36px;
  padding: 0 10px;
  margin: 0;
  background: ${(props) => backgroundColor[props.theme]};
  list-style: none;
  border-radius: 8px;
  color: ${(props) => textColor[props.theme]};
  width: 205px;
`;

export const Count = styled.span<ActivityCardItemProps>`
  padding: 2px 4px;
  color: ${(props) => textColor[props.theme]};
  font-size: 1px;
  font-weight: bold;
  line-height: 12px;
`;

export const Title = styled.span<ActivityCardItemProps>`
  padding: 2px 4px;
  color: ${(props) => textColor[props.theme]};
  font-size: 1px;
  font-weight: 100;
  line-height: 12px;
`;

export const ActivityCardItem = styled.li<ActivityCardItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px 4px;
  color: ${(props) => textColor[props.theme]};
  font-size: 1px;
  font-weight: 100;
  line-height: 12px;
`;
