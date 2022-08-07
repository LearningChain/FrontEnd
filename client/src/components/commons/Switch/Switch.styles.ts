import styled, {css} from 'styled-components';
import {SwitchProps} from './Switch';

export const Layout = styled.button<SwitchProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: none;
  ${(props) =>
    props.pattern === 'mobileHome' &&
    css`
      width: 160px;
      height: 40px;
      color: ${props.selected ? '#5F5F5F' : '#949494'};
      border-bottom: 2px solid ${props.selected ? '#919191' : '#D9D9D9'};
    `}
  ${(props) =>
    props.pattern === 'mobileContent' &&
    css`
      width: 90px;
      height: 40px;
      color: ${props.selected ? '#333333' : '#AEAEAE'};
      border-bottom: 2px solid ${props.selected ? '#333333' : '#F1F1F1'};
    `}
    ${(props) =>
    props.pattern === 'desktopContent' &&
    css`
      width: 336px;
      height: 70px;
      font-size: 20px;
      font-weight: bold;
      color: ${props.selected ? '#333333' : '#AEAEAE'};
      border-bottom: 4px solid ${props.selected ? '#333333' : '#F1F1F1'};
    `}
`;
