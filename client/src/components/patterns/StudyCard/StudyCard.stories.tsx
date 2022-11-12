import StudyCard from '.';

export default {
  title: 'Patterns/StudyCard',
  component: StudyCard,
};

const data = {
  duedate: 'D-7',
  title: '월 1회 UX 도서 스터디',
  description: '매 달 UX 관련 도서를 선정하여 월 말에 함께 리뷰하는 자리를 가집니다. 스터디는 오프라인으로 ...',
  keywords: ['도서', '오프라인스터디', '도서리뷰'],
};

export const all = (args: any) => (
  <>
    <StudyCard {...args}/>
  </>
);

all.args = {...data};
