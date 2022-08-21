import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  width: 324px;
  height: 110px;
  background: #D9D9D9;
  border-radius: 10px;
  overflow: hidden;
`;

export const ImageBox = styled.div`
  width: 108px;
  height: 110px;
  background-color: #F0F0F0;
`;

export const Image = styled.img`
  width: 100%;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  justify-content: space-evenly;
`;

export const Title = styled.div`
  font-size: 18px;
`;

export const Writer = styled.div`
  font-size: 10px;
`;

export const Description = styled.div`
  font-size: 15px;
`;
