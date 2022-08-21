import React, {useEffect, useRef} from 'react';

import {useRecoilState} from 'recoil';
import {modalState} from '../../../recoil/modal';

import {
  Overlay,
  ModalBox,
  Layout,
  CloseIconBox,
  ContentBox,
  Title,
  Description,
  ButtonBox,
  Svg,
} from './Modal.styles';
import Button from '../../commons/Button';

const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
} as const;

type Keys = keyof typeof THEME;
type Values = typeof THEME[Keys];

export interface ModalProps {
  title?: string;
  description?: string;
  secondary?: string;
  primary?: string;
  theme?: Values ;
  block?: boolean;
  onClickPrimary?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  onClickSecondary?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Modal = ({
  title,
  description,
  secondary,
  primary,
  onClickPrimary,
  onClickSecondary,
  block,
  ...props
}: ModalProps) => {
  const [isModalOpened, setIsModalOpened] = useRecoilState(modalState);
  const modal = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (isModalOpened && !modal?.current.contains(event.target)) {
        setIsModalOpened(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isModalOpened, setIsModalOpened]);

  return (
    <>
      <Overlay />
      <ModalBox>
        <Layout ref={modal} {...props}>
          <CloseIconBox>
            <Svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              block={block}
              stroke="currentColor"
              {...props}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </Svg>
          </CloseIconBox>
          <ContentBox>
            <Title {...props}>
              {title}
            </Title>
            <Description>{description}</Description>
          </ContentBox>
          <ButtonBox>
            <Button
              pattern='RectangleWhite'
              onClick={onClickPrimary}
              {...props}
            >
              {secondary}
            </Button>
            <Button
              pattern='RectangleWhite'
              onClick={onClickSecondary}
              {...props}
            >
              {primary}
            </Button>
          </ButtonBox>
        </Layout>
      </ModalBox>
    </>
  );
};

Modal.defaultProps = {
  title: 'Job.ssafy로 연결됩니다',
  description: '연결시 Web DRM이 켜집니다.',
  secondary: '사양할게요',
  primary: '네! 들어갈게요',
  theme: THEME.LIGHT,
};

export default Modal;
