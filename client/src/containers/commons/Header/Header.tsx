import Icon from '../../../components/foundations/Icon/Icon';
import {
  DesktopLayout,
  IconBlock,
  Layout,
  NavBlock,
  RightBlock,
  Title,
} from './Header.styles';
import Button from '../../../components/commons/Button';
import {useState} from 'react';
import {useMediaQuery} from 'react-responsive';

const Header = () => {
  const [login, setLogin] = useState(false);
  const mobile = useMediaQuery({maxWidth: 768});
  if (mobile) {
    return (
      <Layout>
        <Title>
          <svg
            width="37"
            height="27"
            viewBox="0 0 37 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.4815 0C20.8498 0 16.3107 4.64189 16.3107 13.5096C16.3107 22.3774 9.45632 21.2911 9.45632 21.2911H7.41987C5.88393 21.2217 5.66615 19.6808 5.63941 19.4343V2.84292C5.63941 1.27122 4.37856 0 2.8197 0C1.26084 0 0 1.27122 0 2.84292V24.1571C0 25.7288 1.26084 27 2.8197 27H9.4525C22.6455 27 21.9272 16.6954 21.9272 13.8409C21.9272 10.0542 22.6646 5.68969 27.0202 5.68969C27.0202 5.68969 30.478 5.47781 31.3606 8.89471C31.3606 8.89471 31.6433 11.3216 34.1803 11.3216C36.7173 11.3216 37 8.47867 37 8.47867C37 3.67114 32.1133 0 26.4777 0L26.4815 0Z"
              fill="#232323"
            />
          </svg>
        </Title>
        <IconBlock>
          <Icon icon={'search'} aria-hidden />
          <Icon icon={'notification'} aria-hidden />
        </IconBlock>
      </Layout>
    );
  } else {
    return (
      <DesktopLayout>
        <Title>Learing chain</Title>
        <NavBlock>
          <div>콘텐츠</div>
          <div>스터디</div>
          <div>로드맵</div>
        </NavBlock>
        {login ? (
          <RightBlock>
            <Icon icon={'search'} aria-hidden />
            <Icon icon={'notification'} aria-hidden />
            <Icon icon={'my'} aria-hidden />
            <Button pattern={'roundModalSmall'} bright={'light'}>
              작성하기
            </Button>
          </RightBlock>
        ) : (
          <RightBlock>
            <Icon icon={'search'} aria-hidden viewBox="-3 -3 30 30" />
            <Button
              pattern={'roundModalSmall'}
              bright={'light'}
              onClick={() => {
                setLogin(true);
              }}
            >
              로그인
            </Button>
            <br />
            <Button pattern={'roundModalSmall'} bright={'dark'}>
              회원가입
            </Button>
          </RightBlock>
        )}
      </DesktopLayout>
    );
  }
};

export default Header;
