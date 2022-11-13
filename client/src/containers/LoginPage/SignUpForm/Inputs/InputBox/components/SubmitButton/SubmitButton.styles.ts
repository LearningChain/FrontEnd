import styled from 'styled-components';
import colors from '@/_shared/colors/colors'

export const Button = styled.button`
  background-color: inherit;
  font-family: 'BMHANNAAir', 'Noto Sans KR';
  font-size: 10px;
  color: ${colors.black};
  border: none;
  cursor: pointer;
  min-width: 50px;
  height: 30px;
  :disabled {
    color: ${colors.gray300};
    cursor: not-allowed;
  }
`;
