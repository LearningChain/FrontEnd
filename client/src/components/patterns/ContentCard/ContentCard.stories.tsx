import ContentCard from './ContentCard';

export default {
  title: 'Patterns/ContentCard',
  component: ContentCard,
};

const data = {
  title: '콘텐츠 제목',
  writer: '글쓴이',
  description: '두줄까지 미리보기 제공 두줄까지 미리보기 제공 두줄까지 미리보기 제공 두줄까지 미리보기 제공 ',
};

export const all = (args: any) => (
  <>
    <div>ContentCardLight</div>
    <br />
    <ContentCard theme={'light'} {...args}/>
    <br />
    <div>ContentCardDark</div>
    <br />
    <ContentCard theme={'dark'} {...args}/>
    <br />
  </>
);

all.args = {...data};
