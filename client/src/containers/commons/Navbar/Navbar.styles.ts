import styled from 'styled-components';

export const Layout = styled.ul`
  width: calc(100% - 40px);
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 10px 20px 20px 20px;
  position: fixed;
  bottom: 0;
  margin: 0;
  box-shadow: 15px -15px 15px -10px rgba(0, 0, 0, 0.2);
`;

export const IconBlock = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 40px;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 0;
`;

export const Name = styled.div<{color: string}>`
  width: 40px;
  text-align: center;
  font-size: 11px;
  margin: 5px 0px 0px 0px;
  text-decoration: none;
  color: ${(props) => props.color};
`;
