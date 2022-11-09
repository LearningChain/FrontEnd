import styled, {css} from 'styled-components';

export const Layout = styled.div<{wrap: string}>`
  display: flex;
  margin: 0 0 20px 0;
  gap: 10px;
  ${(props) =>
    props.wrap === 'scroll' &&
    css`
      white-space: nowrap;
      overflow-x: scroll;
    `}
  ${(props) =>
    props.wrap === 'wrap' &&
    css`
      flex-wrap: wrap;
    `}

  @media (min-width: 768px) {
    justify-content: center;
  }
`;
