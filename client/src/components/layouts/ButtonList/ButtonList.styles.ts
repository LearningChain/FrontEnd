import styled, {css} from 'styled-components';

export const Layout = styled.div<{boxWidth?: string; boxHeight?: string}>`
  display: flex;
  ${(props) =>
    props.boxWidth &&
    css`
      width: ${props.boxWidth};
    `}
  ${(props) =>
    props.boxHeight &&
    css`
      width: ${props.boxHeight};
    `}
`;
