import Icon from '../../../components/foundations/Icon/Icon';
import {IconBlock, Layout} from './Navbar.styles';
import React from 'react';
import {Name} from './Navbar.styles';

const Navbar = () => {
  return (
    <nav>
      <Layout>
        {navList.map((navObj) => {
          return (
            <IconBlock key={navObj.icon}>
              <Icon icon={navObj.icon} aria-hidden />
              <Name>{navObj.name}</Name>
            </IconBlock>
          );
        })}
      </Layout>
    </nav>
  );
};

const navList = [
  {name: '홈', icon: 'home'},
  {name: '콘텐츠', icon: 'content'},
  {name: '', icon: 'plus'},
  {name: '스터디', icon: 'study'},
  {name: 'My', icon: 'my'},
];

export default Navbar;
