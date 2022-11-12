import React from 'react';
import StudyCardList, {StudyCardListProps} from './StudyCardList';

export default {
  title: 'Layouts/StudyCardList',
  component: StudyCardList,
};

const data = [
  {
    duedate: 'D-7',
    title: '월 1회 UX 도서 스터디',
    description: '매 달 UX 관련 도서를 선정하여 월 말에 함께 리뷰하는 자리를 가집니다. 스터디는 오프라인으로 ...',
    keywords: ['도서', '오프라인스터디', '도서리뷰'],
  },
  {
    duedate: 'D-4',
    title: '핀태크앱 사이드 프로젝트 팀원 구인',
    description: '기획자, BX, UXUI, 개발자들과 협업하여 핀테크 관련 주제로 앱 출시를 위한 사이드 프로젝트를 합니다.',
    keywords: ['사이드프로젝트', 'APP', '직장인'],
  },
  {
    duedate: 'D-6',
    title: '30일 안에 피그마 뽀개기',
    description: '함께 스터디하면서 피그마 툴 숙련도를 높이고 싶은 UXUI 디자이너, 기획자 등을 모집하고 있습니다.',
    keywords: ['피그마', 'UIUX', '취준생'],
  },
];

export const all = (args: StudyCardListProps) => (
  <>
    <div>StudyCardLight</div>
    <br />
    <StudyCardList data={data} />
    <br />
    <div>StudyCardDark</div>
    <br />
    <StudyCardList data={data} />
    <br />
  </>
);

all.args = {...data};
