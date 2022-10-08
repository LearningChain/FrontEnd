import InfoCard from './InfoCard';

export default {
  title: 'Patterns/InfoCard',
  component: InfoCard,
};

export const all = () => (
  <>
    <InfoCard {...user} />
  </>
);

const user = {
  nickname: 'jeongB',
  description: 'back-end',
  contentscount: 32,
  recommandscount: 1324,
};
