import { Link } from 'react-router-dom';
import colors from '@/_shared/colors';

import styled, { keyframes } from 'styled-components';
import TimerComponent from '@/components/commons/Timer';


export const Layout = styled.section`
  width: 320px;
  padding: 18px;
  box-sizing: border-box;
  margin: auto;
`;

export const InputForm = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 1fr;
  align-items: flex-start;
`;

export const SignUpFormLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  max-width: 450px;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

export const InputFormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;
`;

export const HomeLink = styled(Link)`
  height: fit-content;
  font-family: 'BMHANNAPro', 'Noto Sans KR';
  font-size: 40px;
  color: ${colors.white};
`;

export const Heading = styled.h1`
  font-family: 'BMHANNAPro', 'Noto Sans KR';
  font-size: 22px;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: 'BMHANNAAir', 'Noto Sans KR';
  background-color: black;
  color: white;
  border: 1px solid ${colors.gray200};
  border-radius: 5px;
  font-size: 16px;
  height: 50px;
  cursor: pointer;
  margin-top: 40px;
  :disabled {
    background-color: white;
    color: black;
    cursor: not-allowed;
  }
`;

export const LoginLink = styled(Link)`
  display: inline;
  color: ${colors.white};
  cursor: pointer;
`;

export const SignUpText = styled.p`
  width: 100%;
  padding: 40px 0px 30px;
  text-align: center;
  cursor: default;
  border-bottom: 1px solid ${colors.gray50};
`;

const sizeUp = keyframes`
  from {
    display: none;
    height: 0;
    opacity: 0;
  }
  to {
    display: block;
    height: 65px;
    opacity: 1;
  }
`;

const sizeDown = keyframes`
  from {
    display: block;
    height: 65px;
    opacity: 1;
  }
  to {
    display: none;
    height: 0;
    opacity: 0;
  }
`;

export const VerificationCodeContainer = styled.div<{ isEmailSet: boolean; isVerified: boolean }>`
  width: 100%;
  animation: ${props => (props.isEmailSet ? (props.isVerified ? sizeDown : sizeUp) : null)} 0.5s;
  animation-fill-mode: forwards;
`;

export const PasswordInputContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 7fr 1fr;
  align-items: center;
`;

export const MessageContainer = styled.div`
  width: 100%;
  padding: 10px;
  height: 10px;
`;

export const Message = styled.p`
  font-size: 16px;
  color: ${colors.gray200};
`;

export const Timer = styled(TimerComponent)`
  width: 100%;
`;

export const Label = styled.label`
  font-family: 'BMHANNAAir', 'Noto Sans KR';
  font-size: 16px;
  font-weight: 600;
  color: ${colors.black};
`;