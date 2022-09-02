import styled from 'styled-components';

export const Layout = styled.section`
  display: grid;
  width: 100%;
  max-width: 600px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
`;

export const RewardItemLink = styled.div`
  text-decoration: none;
`;
