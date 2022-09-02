import {Layout, RewardItemLink} from './RewardGrid.styles';
import Reward from '../../commons/Reward';

export interface RewardProps {
  reward: string;
  size: number;
  color?: string;
}

export interface RewardGridProps {
  theme?: string;
  data: RewardProps[];
  isLoading?: boolean;
}

const RewardGrid = ({data, theme, isLoading, ...props}: RewardGridProps) => {
  const items = isLoading ? RewardData : data;
  return (
    <Layout {...props}>
      {items.map((item, idx, ...props) => (
        <RewardItemLink key={idx}>
          <Reward reward={item.reward} size={item.size} isActive={item.isActive} {...props}/>
        </RewardItemLink>
      ))}
    </Layout>
  );
};

const RewardData = new Array(9).fill({
  reward: 'menu',
  size: 96,
});

export default RewardGrid;
