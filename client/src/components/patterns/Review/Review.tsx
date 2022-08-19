import React from 'react';
import Avatar from '../../commons/Avatar/Avatar';
import Button from '../../commons/Button/Button';
import {
  BottomInfo,
  Date,
  Layout,
  MainInfo,
  NickName,
  Paragraph,
  SubTitle,
  TopInfo,
} from './Review.styles';

export interface ReviewProps {
  nickname: string;
  good: string;
  bad: string;
  data: string;
}

const Review = ({...props}: ReviewProps) => {
  return (
    <Layout>
      <TopInfo>
        <Avatar
          pattern={'noneIconAvater'}
          useImg={'/testlink'}
          width={'50px'}
          height={'50px'}
        />
        <NickName>{props.nickname}</NickName>
        <Button pattern={'iconWithBackground'}>
          <div>추천</div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8.5C1 7.67157 1.67157 7 2.5 7C3.32843 7 4 7.67157 4 8.5V13.5C4 14.3284 3.32843 15 2.5 15C1.67157 15 1 14.3284 1 13.5V8.5Z"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M4 9.04901C4 8.65967 4 8.46499 4.03602 8.27778C4.06798 8.11166 4.12089 7.95026 4.19348 7.79745C4.27528 7.62525 4.39053 7.46836 4.62103 7.15457L8.99916 1.19447C9.08897 1.07221 9.23161 1 9.38331 1C10.4363 1 11.2899 1.85363 11.2899 2.90663V6.25H11.5016C12.7152 6.25 13.322 6.25 13.7688 6.49287C14.1612 6.70624 14.471 7.04487 14.6486 7.45476C14.8508 7.92134 14.7969 8.52573 14.689 9.73452L14.4792 12.0845C14.3873 13.1135 14.3414 13.628 14.1115 14.0172C13.9091 14.3599 13.6089 14.6344 13.2496 14.8056C12.8415 15 12.325 15 11.2919 15H7.2C6.07989 15 5.51984 15 5.09202 14.782C4.71569 14.5903 4.40973 14.2843 4.21799 13.908C4 13.4802 4 12.9201 4 11.8V9.04901Z"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </TopInfo>
      <MainInfo>
        <SubTitle>GOOD!</SubTitle>
        <Paragraph>{props.good}</Paragraph>
        <SubTitle>BAD!</SubTitle>
        <Paragraph>{props.bad}</Paragraph>
        <BottomInfo>
          <Button pattern={'iconWith'}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 14.875C8.41035 14.875 8.32137 14.8524 8.24035 14.8073C7.95812 14.6492 1.32812 10.8813 1.32812 6.10939C1.32812 3.91267 3.11578 2.12502 5.3125 2.12502C6.58949 2.12502 7.76023 2.72799 8.50066 3.71744C9.56781 2.29502 11.5049 1.71662 13.2202 2.43182C14.7096 3.05271 15.6719 4.49639 15.6719 6.10939C15.6719 10.8813 9.04188 14.6492 8.75965 14.8073C8.6793 14.8524 8.58965 14.875 8.5 14.875ZM5.3125 3.18752C3.70148 3.18752 2.39062 4.49838 2.39062 6.10939C2.39062 9.77236 7.30336 12.9957 8.5 13.7262C9.69664 12.9957 14.6094 9.77236 14.6094 6.10939C14.6094 4.92603 13.9035 3.86752 12.8111 3.41197C12.0906 3.11182 11.2964 3.10982 10.5745 3.40732C9.8527 3.70482 9.29023 4.26463 8.99008 4.98514C8.90773 5.18303 8.71383 5.31185 8.5 5.31185C8.28617 5.31185 8.09227 5.18303 8.00992 4.98514C7.55504 3.89275 6.49586 3.18685 5.3125 3.18685V3.18752Z"
                fill="#333333"
              />
            </svg>
            <div>좋아요</div>
          </Button>
          <Button pattern={'textAlone'}>답글달기</Button>
          <Button pattern={'textAlone'}>삭제</Button>
          <Date>{props.data}</Date>
        </BottomInfo>
      </MainInfo>
    </Layout>
  );
};

export default Review;
