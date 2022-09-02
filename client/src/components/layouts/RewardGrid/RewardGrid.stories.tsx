import RewardGrid, {RewardGridProps} from './RewardGrid';

export default {
  title: 'Layouts/RewardGrid',
  component: RewardGrid,
};

const data= [
  {
    reward: 'camera',
    size: 98,
    color: 'yellow',
    isActive: true,
  },
  {
    reward: 'camera',
    size: 98,
    color: 'yellow',
    isActive: true,
  },
  {
    reward: 'camera',
    size: 98,
    color: 'yellow',
  },
  {
    reward: 'camera',
    size: 98,
    color: 'yellow',
  },
  {
    reward: 'camera',
    size: 98,
    color: 'yellow',
  },
];

export const all = (args:RewardGridProps) => (
  <>
    <div>dark</div>
      <RewardGrid theme='dark' data={data} />
    <br/>
    <div>light</div>
      <RewardGrid theme='light' data={data} />
    <br/>
    <div>Loading</div>
      <RewardGrid theme='light' data={data} isLoading/>
    <br/>
  </>
);


all.args = {...data};
