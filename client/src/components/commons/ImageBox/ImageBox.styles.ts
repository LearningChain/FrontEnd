import styled, {css} from 'styled-components';
import {ImageBoxProps} from './ImageBox';

export const Layout = styled.img<ImageBoxProps>`
  object-fit: cover;
  ${(props) =>
    props.pattern === 'bookMarkImage' &&
    css`
      width: 108px;
      height: 110px;
      border-radius: 10px 0 0 10px;
      background: #d9d9d9;
    `}

  ${(props) =>
    props.pattern === 'cardImage' &&
    css`
      width: 125px;
      height: 125px;
      border-radius: 10px;
      background: #f0f0f0;
    `}

  ${(props) =>
    props.pattern === 'loginImage' &&
    css`
      width: 228px;
      height: 250px;
      background: #f4f4f4;
    `}
`;
