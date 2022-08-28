import InfoCard from './InfoCard';

export default {
  title: 'Patterns/InfoCard',
  component: InfoCard,
};

export const all = () => (
  <>
    <div>InfoCardLight</div>
    <br />
    <InfoCard theme={'light'} user={user}/>
    <br />
    <br />
    <div>InfoCardDark</div>
    <br />
    <InfoCard theme={'dark'} user={user}/>
    <br />
  </>
);

const user = {
  name: '승주',
  description: 'react공부중',
  contentscount: 44,
  recommandscount: 1445,
};
