import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '@/_shared/colors'


export const Linkbox = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10%;
`;

export const LoginForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const SignUpLink = styled(Link)`
  display: inline;
  color: ${colors.black};
  cursor: pointer;
  text-decoration-line: none;
`;

export const SignUpText = styled.p`
  width: 100%;
  padding: 10px 0px 30px;
  text-align: center;
  cursor: default;
  font-size: 12px;
`;

export const Layout = styled.section`
  width: 350px;
  padding: 18px;
  box-sizing: border-box;
  margin: auto;
`;