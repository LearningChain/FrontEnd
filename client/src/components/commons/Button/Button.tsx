import {Layout} from './Button.styles';
import React from 'react';

export interface ButtonProps {
  /* 버튼 안의 내용 */
  children: React.ReactNode;
  /* 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /* 버튼 유형 결정 */
  pattern: string;
  /* 버튼 밝기 결정 */
  bright?: string;
  /* 버튼 크기 결정 */
  size?: string;
  /* 배경색 결정 */
  background?: string;
  /* 글자색상 결정 */
  color?: string;
}

const Button = ({children, ...props}: ButtonProps) => {
  return <Layout {...props}>{children}</Layout>;
};

export default Button;
