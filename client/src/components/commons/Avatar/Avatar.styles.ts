import styled, {css} from 'styled-components';
import {AvatarProps} from './Avatar';

export const Layout = styled.div<AvatarProps>`
  ${(props) =>
    props.pattern === 'leftIconAvater' &&
    css`
      width: 55px;
      height: 55px;
      position: relative;
      img {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid #eaeaea;
      }
    `}
  ${(props) =>
    props.pattern === 'noneIconAvater' &&
    css`
      width: ${props.width ? props.width : '96px'};
      height: ${props.height ? props.height : '96px'};
      img {
        width: ${props.width ? props.width : '96px'};
        height: ${props.height ? props.height : '96px'};
        border-radius: 50%;
        border: 1px solid #eaeaea;
      }
    `}
    ${(props) =>
    props.pattern === 'rightIconAvater' &&
    css`
      width: 100px;
      height: 100px;
      position: relative;
      img {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 96px;
        height: 96px;
        border-radius: 50%;
        border: 1px solid #eaeaea;
      }
    `};
`;

export const Icon = styled.div<{pattern: string}>`
  ${(props) =>
    props.pattern === 'leftIconAvater' &&
    css`
      position: absolute;
      right: 40px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #b1b1b1;
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ${(props) =>
    props.pattern === 'rightIconAvater' &&
    css`
      position: absolute;
      left: 66px;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: #b1b1b1;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
