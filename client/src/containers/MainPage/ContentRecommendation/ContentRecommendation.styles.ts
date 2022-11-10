import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Layout = styled.div`
  padding: 20px 20px 0 20px;
  @media (min-width: 1240px) {
    width: 1200px;
    margin: auto;
    padding: 20px 20px 20px 20px;
  }
`;
export const Title = styled.h1`
  font-size: 25px;
  margin: 0 0 30px 0;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const AddContents = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 0 0 80px 0;
  padding: 30px 0 30px 0;
`;
