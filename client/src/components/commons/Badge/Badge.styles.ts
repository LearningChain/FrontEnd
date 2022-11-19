import styled, {css} from 'styled-components';
import {BadgeProps} from './Badge';

interface BadgeColorAtr {
    [light: string] :{
        [radiusRectangle: string] : string;
    },
    dark: {
        radiusRectangle: string;
    }
}
const textColor: BadgeColorAtr = {
  light: {
    radiusRectangle: '#4A5056',
  },
  dark: {
    radiusRectangle: '#FFFFFF',
  },
};

const backgroundColor: BadgeColorAtr = {
  light: {
    radiusRectangle: '#eaeaea',
  },
  dark: {
    radiusRectangle: '#A4A4A4',
  },
};

export const Layout = styled.li<BadgeProps>`
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  background: ${(props) => backgroundColor[props.theme][props.pattern]};
  list-style: none;
  ${(props) =>
    props.pattern === 'radiusRectangle' &&
    css`
      height: 15px;
      border-radius: 5px;
    `}
  ${(props) => 
    props.pattern === 'DdayBadge' &&
    css`
      height: 30px;
      border-radius: 5px;
    `}
`;

export const Text = styled.span<BadgeProps>`
  padding: 2px 4px;
  color: ${(props) => textColor[props.theme][props.pattern]};
  font-size: 1px;
  font-weight: 100;
  line-height: 12px;
`;
