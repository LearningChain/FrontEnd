import styled from 'styled-components';
import Reward from '../Reward';

export default {
  title: 'Commons/Reward',
  component: Reward,
};

export const all = () => (
  <>
    <RewardBox>
      <Reward size={40} color={'#bcbcbc'} reward={'camera'}/>
      <Reward size={30} color={'yellow'} reward={'menu'} />
    </RewardBox>
  </>
);

const RewardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

