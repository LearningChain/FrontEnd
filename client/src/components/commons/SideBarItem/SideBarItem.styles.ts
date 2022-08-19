import styled, {css, keyframes, CSSProp, CSSObject} from 'styled-components';
import {SideBarItemProps} from './SideBarItem';

interface themerAttr {
  [light: string]: string;
  dark: string;
}

const textColor: themerAttr = {
  light: '#292D32',
  dark: '#F8F9FA',
};

const animations = {
  glow: keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  `,
  glowLight: keyframes`
    0%, 100% { background: "#E9ECEF" }
    50% { background: "#F8F9FA"  }
  `,
  glowDark: keyframes`
    0%, 100% { background: "#3D4248"}
    50% { background: "#292D32"}
  `,
  dropdown: keyframes`
    0% { opacity: 0; transform: translateY(-2px); }
  `,
  modal: keyframes`
    0% { opacity: 0; transform: translateY(10px); }
  `,
  appear: keyframes`
    0% { opacity: 0;}
  `,
};

interface loadingAttr {
  [light: string] : CSSProp | CSSObject;
  dark: CSSProp | CSSObject;
}

const loadings: loadingAttr = {
  light: css`
    animation: ${animations.glowLight} 1.5s ease-in-out infinite;
  `,
  dark: css`
    animation: ${animations.glowDark} 1.5s ease-in-out infinite;
  `,
};

export const Layout = styled.li<SideBarItemProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 36px;
  padding: 0 10px;
  margin: 0;
  list-style: none;
  color: ${(props) => textColor[props.theme]};
`;

export const TitleBox = styled.div<SideBarItemProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  width: 124px;
  height: 28px;
  border-radius: 4px;
  ${(props) => props.isLoading && loadings[props.theme]};
`;

export const Title = styled.h4<SideBarItemProps>`
  margin: 0;
  font-size: "1rem";
  font-weight: "700";
  white-space: nowrap;
`;

export const Content = styled.span<SideBarItemProps>`
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 28px;
  border-radius: 4px;
  overflow: hidden;
  font-size: "1rem";
  font-weight: "400";
  text-overflow: ellipsis;
  white-space: nowrap;
  ${(props) => props.isLoading && loadings[props.theme]};
`;
