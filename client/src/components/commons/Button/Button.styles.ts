import styled, {css} from 'styled-components';
import {ButtonProps} from './Button';

export const Layout = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin:0;
  padding:0;
  ${(props) =>
    props.pattern === 'filter' &&
    css`
      height: 30px;
      padding: 0px 10px 0px 10px;
      border-radius: 15px;
      background: ${props.background
        ? props.background
        : props.bright === 'light'
        ? '#eaeaea'
        : '#A4A4A4'};
    `}

  ${(props) =>
    props.pattern === 'category' &&
    css`
      width: 157px;
      height: 104px;
      border-radius: 20px;
      background: #d9d9d9;
    `}

    ${(props) =>
    props.pattern === 'squareModal' &&
    css`
      width: 100px;
      height: 50px;
      color: #ffffff;
      background: ${props.bright === 'light' ? '#CBCBCB' : '#333333'};
    `}

    ${(props) =>
    props.pattern === 'RectangleWhite' &&
    css`
      width: 324px;
      height: 50px;
      color: #ffffff;
      background: ${props.bright === 'light' ? '#D9D9D9' : '#616161'};
    `}

    ${(props) =>
    props.pattern === 'RectangleBlack' &&
    css`
      width: 324px;
      height: 50px;
      background: #d9d9d9;
    `}

    ${(props) =>
    props.pattern === 'roundModal' &&
    css`
      width: 115px;
      height: 38px;
      border-radius: 73px;
      border: ${props.bright === 'light' ? '1px solid #C8C8C8' : 'none'};
      color: ${props.bright === 'light' ? '#000000' : '#FFFFFF'};
      background: ${props.bright === 'light' ? '#FFFFFF' : '#949494'};
    `}

    ${(props) =>
    props.pattern === 'roundModalSmall' &&
    css`
      width: 64px;
      height: 30px;
      border-radius: 40px;
      border: ${props.bright === 'light' ? '1px solid #C8C8C8' : 'none'};
      color: ${props.bright === 'light' ? '#000000' : '#FFFFFF'};
      background: ${props.bright === 'light' ? '#FFFFFF' : '#949494'};
    `}

    ${(props) =>
    props.pattern === 'circleIcon' &&
    css`
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #f1f1f1;
    `}

    ${(props) =>
    props.pattern === 'iconWith' &&
    css`
      height: 23px;
      display: flex;
      justify-content: center;
      background: #ffffff;
      svg {
        margin-right: 5px;
      }
    `}

     ${(props) =>
    props.pattern === 'iconWithBackground' &&
    css`
      height: 30px;
      padding: 0px 10px 0px 10px;
      border-radius: 70px;
      background: ${props.background ? props.background : 'black'};
      color: ${props.color ? props.color : 'white'};
      svg {
        margin-left: 5px;
      }
    `}

     ${(props) =>
    props.pattern === 'iconAlone' &&
    css`
      background: #ffffff;
      width: 25px;
      height: 25px;
    `}

     ${(props) =>
    props.pattern === 'iconAlone' &&
    css`
      background: #ffffff;
      width: 25px;
      height: 25px;
    `}

    ${(props) =>
    props.pattern === 'textAlone' &&
    css`
      color: #b3b3b3;
      background: ${props.background ? props.background : '#FFFFFF'};
    `}
    ${(props) =>
    props.pattern === 'loginSubmit' &&
    css`
      width: 100%;
      font-family: 'BMHANNAAir', 'Noto Sans KR';
      background-color: ${props.color ? props.color : 'black'};
      color: white;
      border-radius: 10px;
      font-size: 17px;
      height: 50px;
      cursor: pointer;
    `}
`;
