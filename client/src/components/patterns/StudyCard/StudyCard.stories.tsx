import StudyCard from '.';

export default {
  title: 'Patterns/StudyCard',
  component: StudyCard,
};

const data = {
  title: '스터디 카드',
  writer: '하이',
  description: '스터디 카드 세부 내용',
};

export const all = (args) => (
  <>
    <StudyCard {...args}/>
  </>
);

all.args = {...data};
