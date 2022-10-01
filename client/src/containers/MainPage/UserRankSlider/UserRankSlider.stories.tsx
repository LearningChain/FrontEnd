import UserRankSlider from './UserRankSlider';

export default {
  title: 'Container/UserRankSlider',
  component: UserRankSlider,
};

export const all = () => (
  <UserRankSlider
    users={[
      {
        id: 1,
        name: '승주',
        description: 'react공부중',
        contentscount: 44,
        recommandscount: 1445,
      },
      {
        id: 2,
        name: '승주',
        description: 'react공부중',
        contentscount: 44,
        recommandscount: 1445,
      },
      {
        id: 3,
        name: '승주',
        description: 'react공부중',
        contentscount: 44,
        recommandscount: 1445,
      },
    ]}
  />
);
