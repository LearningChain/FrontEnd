import styled, {css} from 'styled-components';

export const Layout = styled.button<{isActive?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 96px;
  height: 96px;
  border-radius: 50px;
  background-color: gray;
  ${(props) =>
    !props.isActive &&
    css`
      opacity: 0.5;
    `}
`;
