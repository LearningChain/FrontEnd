import styled from 'styled-components';
import colors from '@/_shared/colors/colors'

export const Input = styled.input<{ hasError: boolean; isAnimationActive?: boolean }>`
  border: none;
  border-bottom: 1px solid ${props => (props.hasError ? colors.error : colors.gray100)};
  width: 100%;
  display: inline-block;
  padding: 8px 0px 5px 8px;
  ::placeholder {
    color: ${colors.gray400};
  }
`;