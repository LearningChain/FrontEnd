import {PropsWithChildrenC} from '@/types/types';

import React from 'react';

import * as Styled from './SubmitButton.styles';

const SubmitButton = ({
  children,
  onClick,
  disabled,
}: PropsWithChildrenC<React.ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <Styled.Button onClick={onClick} disabled={disabled}>
      {children}
    </Styled.Button>
  );
};

export default SubmitButton;
