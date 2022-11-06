import {useMediaQuery} from 'react-responsive';
import {Link, useLocation} from 'react-router-dom';
import Icon from '../../../components/foundations/Icon/Icon';
import {IconBlock, Layout} from './Navbar.styles';
import {Name} from './Navbar.styles';

const Navbar = () => {
  const location = useLocation();
  const mobile = useMediaQuery({maxWidth: 768});
  if (mobile) {
    return (
      <nav>
        <Layout>
          {navList.map((navObj) => {
            const color =
              location.pathname === navObj.to ? '#232323' : '#AFAFAF';
            return (
              <Link to={'/mais'} key={navObj.icon}>
                <IconBlock>
                  <Icon icon={navObj.icon} aria-hidden stroke={color} />
                  <Name color={color}>{navObj.name}</Name>
                </IconBlock>
              </Link>
            );
          })}
        </Layout>
      </nav>
    );
  } else {
    return <></>;
  }
};

const navList = [
  {name: '홈', icon: 'main', to: '/main'},
  {name: '콘텐츠', icon: 'content', to: '/content'},
  {name: '', icon: 'plus', to: '/plus'},
  {name: '스터디', icon: 'study', to: '/study'},
  {name: 'My', icon: 'my', to: '/my'},
];

export default Navbar;
