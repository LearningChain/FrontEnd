import Icon from '../../../components/foundations/Icon/Icon';
import {
  DesktopLayout,
  IconBlock,
  Layout,
  NavBlock,
  RightBlock,
  Title,
} from './Header.styles';
import React from 'react';
import Button from '../../../components/commons/Button';

export interface HeaderProps {
  device: string;
  login: boolean;
}

const Header = ({...props}: HeaderProps) => {
  if (props.device === 'mobile') {
    return (
      <Layout>
        <Title>Learing chain</Title>
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
        {props.login ? (
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
            <Button pattern={'roundModalSmall'} bright={'light'}>
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
