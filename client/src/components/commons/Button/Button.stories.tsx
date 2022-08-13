import Button from './Button';
import React from 'react';
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
    <Button pattern={'roundModal'} bright={'dark'}>
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
    <Button pattern={'iconWithBackground'}>
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
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
    <br />
    <div>iconAlone</div>
    <br />
    <Button pattern={'iconAlone'}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="#2F363D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.9999 21.0004L16.6499 16.6504"
          stroke="#2F363D"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
    <br />
    <div>textAlone</div>
    <br />
    <Button pattern={'textAlone'}>text</Button>
  </>
);
