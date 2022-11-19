import Button from './Button';
import React from 'react';
import Icon from '../../../components/foundations/Icon/Icon';
export default {
  title: 'Commons/Button',
  component: Button,
};

export const all = () => (
  <>
    <div>filter</div>
    <br />
    <Button pattern={'filter'} bright={'light'}>
      개발
    </Button>
    <br />
    <Button pattern={'filter'} bright={'dark'}>
      전체
    </Button>
    <br />
    <div>category</div>
    <br />
    <Button pattern={'category'}>영상</Button>
    <br />
    <div>squareModal</div>
    <br />
    <Button pattern={'squareModal'} bright={'light'}>
      취소
    </Button>
    <br />
    <Button pattern={'squareModal'} bright={'dark'}>
      삭제
    </Button>
    <br />
    <div>RectangleWhite</div>
    <br />
    <Button pattern={'RectangleWhite'} bright={'light'}>
      신청완료
    </Button>
    <br />
    <Button pattern={'RectangleWhite'} bright={'dark'}>
      신청하기
    </Button>
    <br />
    <div>RectangleBlack</div>
    <br />
    <Button pattern={'RectangleBlack'} bright={'light'}>
      다음
    </Button>
    <br />
    <div>roundModal</div>
    <br />
    <Button pattern={'roundModal'} bright={'light'}>
      취소
    </Button>
    <br />
    <div>roundModalSmall</div>
    <br />
    <Button pattern={'roundModalSmall'} bright={'light'}>
      취소
    </Button>
    <br />
    <Button pattern={'roundModalSmall'} bright={'dark'}>
      확인
    </Button>
    <br />
    <div>circleIcon</div>
    <br />
    <Button pattern={'circleIcon'}>
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 1L10.7712 10.063C8.99346 12.021 8.10457 13 7 13C5.89543 13 5.00654 12.021 3.22876 10.063L1 7.60828"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </Button>
    <br />
    <div>iconWith</div>
    <br />
    <Button pattern={'iconWith'}>
      <div>더보기</div>
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.59082 5.72754L13.3635 10.5003L8.59082 15.273"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
    <br />
    <br />
    <div>iconWithBackground</div>
    <br />
    <Button pattern={'iconWithBackground'} background={'#ACED22'}>
      <div>더보기</div>
      <Icon
        icon="deleteX"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        stroke=""
      />
    </Button>
    <br />
    <div>iconAlone</div>
    <br />
    <Button pattern={'iconAlone'} background={'#ACED22'}>
      <Icon
        icon="deleteX"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        stroke=""
      />
    </Button>
    <br />
    <div>textAlone</div>
    <br />
    <Button pattern={'textAlone'}>text</Button>
    <Button pattern={'loginSubmit'}>로그인</Button>
  </>
);
