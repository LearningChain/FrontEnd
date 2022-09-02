import StudyDetail from '.';

export default {
  title: 'Patterns/StudyDetail',
  component: StudyDetail,
};

const data = {
  duedate: 'D-7',
  duedateDescription: '7월 16일 마감',
  title: '30일 안에 피그마 뽀개기',
  username: '코코몽',
  job: '디자이너',
  theme: '피그마 초보',
  people: '최소 3명/ 최대 8명',
  date: '매주 토요일 3시',
  place: '협의 후 진행',
  content: '텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트',
  keywords: ['디자이너', 'figma', '초보'],
};

export const all = (args: any) => (
  <>
    <StudyDetail {...args}/>
  </>
);

all.args = {...data};
