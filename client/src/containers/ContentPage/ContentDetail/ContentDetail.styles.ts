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

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
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

export const DummyBox = styled.div`
  width: 100%;
  height: 140px;
`;
export const FilterButtons = styled.div`
  white-space: nowrap;
  overflow-x: scroll;
  display: flex;
  gap: 10px;
  margin: 0 0 30px 0;
`;
export const FilterButton = styled.div`
  display: flex;
  align-items: center;
  background: #aced22;
  padding: 5px 10px 5px 10px;
  border-radius: 15px;
  gap: 5px;
`;
