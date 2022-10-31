import InfoCard from './InfoCard';

export default {
  title: 'Patterns/InfoCard',
  component: InfoCard,
};

export const all = () => (
  <>
    <InfoCard {...user1} />
    <br />
    <br />
    <InfoCard {...user2} />
  </>
);

const user1 = {
  id: 1,
  nickname: 'jeongB',
  description: 'back-end',
  contentscount: 32,
  recommandscount: 1324,
  shorted: false,
  followed: true,
};

const user2 = {
  id: 1,
  nickname: 'jeongB',
  description: 'back-end',
  contentscount: 32,
  recommandscount: 1324,
  shorted: true,
  rank: 1,
  followed: true,
};
