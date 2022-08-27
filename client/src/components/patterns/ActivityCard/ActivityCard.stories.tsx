import ActivityCard from './ActivityCard';

export default {
  title: 'Patterns/ActivityCard',
  component: ActivityCard,
};

export const all = () => (
  <>
    <div>ActivityCardLight</div>
    <br />
    <ActivityCard theme={'light'} itemList={itemList}/>
    <br />
    <br />
    <div>ActivityCardDark</div>
    <br />
    <ActivityCard theme={'dark'} itemList={itemList}/>
    <br />
  </>
);

const itemList = [
  {
    count: 232,
    title: '랭킹',
  },
  {
    count: 403,
    title: '추천수',
  },
  {
    count: 403,
    title: '팔로워',
  },
  {
    count: 403,
    title: '팔로잉',
  },
];
