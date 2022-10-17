import Button from '../../../components/commons/Button';
import InfoCard from '../../../components/patterns/InfoCard';
import {
  DummyBox,
  Layout,
  Title,
  TitleBlock,
  UserList,
} from './UserRankSlider.styles';

export interface UserRankSliderProps {
  users: {
    id: number;
    name?: string;
    description?: string;
    contentscount?: number;
    recommandscount?: number;
  }[];
}

const UserRankSlider = ({...props}: UserRankSliderProps) => {
  return (
    <Layout>
      <TitleBlock>
        <DummyBox></DummyBox>
        <Title>Top 러닝체인 회원</Title>
        <Button pattern={'iconWith'}>
          <div>더보기</div>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.59082 5.72754L13.3635 10.5003L8.59082 15.273"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </TitleBlock>
      <UserList>
        {props.users.map((user, index) => {
          return (
            <InfoCard
              nickname={user.name}
              description={user.description}
              contentscount={user.contentscount}
              recommandscount={user.recommandscount}
              key={index}
            />
          );
        })}
      </UserList>
    </Layout>
  );
};

export default UserRankSlider;
