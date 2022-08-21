import styled from 'styled-components';
import {ModalProps} from './Modal';

interface ColorAtr {
    [light: string] : string;
    dark: string;
}

const bgColor: ColorAtr = {
  dark: '#1B1F24',
  light: '#FFFFFF',
};

const textColor: ColorAtr = {
  dark: '#F8F9FA',
  light: '#292D32',
};

export const Overlay = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(15px);
`;

export const ModalBox = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

export const Layout = styled.div<ModalProps>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  top: 50%;
  max-width: 480px;
  margin: auto;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0px 1px 3px rgba(0,0,0,0.1);
  background-color: ${(props) => bgColor[props.theme]};
  transform: translateY(-50%);
`;

export const CloseIconBox = styled.div<ModalProps>`
  display: flex;
  justify-content: flex-end;
  svg {
    width: 18px;
    stroke: #ADB5BD;
    cursor: pointer;
  }
`;

export const ContentBox = styled.div<ModalProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1.5rem;
`;

export const Title = styled.div<ModalProps>`
  color: ${(props) => textColor[props.theme]};
`;

export const Description = styled.div<ModalProps>`
  color: #868E96;
`;

export const ButtonBox = styled.div<ModalProps>`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;

export const Svg = styled.svg<ModalProps>`
  display: ${(props) => (props.block ? 'block' : 'inline-block')};
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;
