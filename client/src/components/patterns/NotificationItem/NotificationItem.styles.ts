import styled from 'styled-components';

export const Layout = styled.div<{active: boolean}>`
  width: 320px;
  height: 147px;
  background: ${(props) => (props.active ? '#FFEEEE' : 'white')};
  padding: 20px;
  position: relative;
  ::before {
    content: '';
    position: absolute;
    left: 20px;
    bottom: 0;
    height: 1px;
    width: 320px; /* or 100px */
    border-bottom: 1px solid #e7e7e7;
  }
`;

export const Title = styled.h1`
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
`;

export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 30px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const DateTime = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #b3b3b3;
  float: right;
`;
