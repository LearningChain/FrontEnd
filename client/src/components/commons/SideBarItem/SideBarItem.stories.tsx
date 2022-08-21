import SideBarItem from './SideBarItem';
import styled from 'styled-components';

export default {
  title: 'Commons/SideBarItem',
  component: SideBarItem,
};

const theme = {
  light: {
    backgroundColor: 'white',
  } as React.CSSProperties,
  dark: {
    backgroundColor: 'black',
  } as React.CSSProperties,
};

export const all = () => (
  <>
    <div style={theme.light}>
      <TypeBox>
        <div>Default</div>
        <div>
          {items.map((item, index) => (
            <SideBarItem key={index} {...item} />
          ))}
        </div>
      </TypeBox>
      <TypeBox>
        <div>Loading</div>
        <div>
          {items.map((item, index) => (
            <SideBarItem key={index} isLoading {...item} />
          ))}
        </div>
      </TypeBox>
    </div>
    <div style={theme.dark}>
      <TypeBox>
        <div style={{color: '#F8F9FA'}}>
          Default
        </div>
        <div>
          {items.map((item, index) => (
            <SideBarItem key={index}theme="dark" {...item} />
          ))}
        </div>
      </TypeBox>
      <TypeBox>
        <div style={{color: '#F8F9FA'}}>
          Loading
        </div>
        <div>
          {items.map((item, index) => (
            <SideBarItem key={index} theme="dark" isLoading {...item} />
          ))}
        </div>
      </TypeBox>
    </div>
  </>
);

const items = [
  {
    title: '개발자',
    description: '',
  },
  {
    title: '0~4년차',
    description: '',
  },
  {
    title: '추천순',
    description: '',
  },
];

const TypeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
