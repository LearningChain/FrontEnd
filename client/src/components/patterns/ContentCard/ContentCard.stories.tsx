import ContentCard from './ContentCard';

export default {
  title: 'Patterns/ContentCard',
  component: ContentCard,
};

const data = {
  title: '플랫폼이 집어삼키는 세상',
  writer: '글쓴이',
  description:
    '플랫폼 혁신이 주역이 되는 기업, 플랫폼이 기업의 성패를 좌우할것이다.',
};

export const all = (args: any) => (
  <>
    <div>ContentCardLight</div>
    <br />
    <ContentCard theme={'light'} {...args} />
    <br />
  </>
);

all.args = {...data};
