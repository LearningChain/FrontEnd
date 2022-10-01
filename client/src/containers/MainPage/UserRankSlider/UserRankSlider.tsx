import {useEffect, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import Button from '../../../components/commons/Button';
import InfoCard from '../../../components/patterns/InfoCard';
import {Layout, TitleBlock, UserList} from './UserRankSlider.styles';

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
  const [view, setView] = useState(3);
  const two = useMediaQuery({query: '(max-width:1200px)'});
  const one = useMediaQuery({query: '(max-width:790px)'});
  useEffect(() => {
    if (two && one) {
      setView(1);
    } else if (two && !one) {
      setView(2);
    } else {
      setView(3);
    }
  }, [two, one]);

  return (
    <Layout>
      <TitleBlock>
        <div></div>
        <h1>Top 러닝체인 회원</h1>
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
        {props.users.slice(0, view).map((user) => {
          return (
            <InfoCard
              theme={'light'}
              name={user.name}
              description={user.description}
              contentscount={user.contentscount}
              recommandscount={user.recommandscount}
              key={user.id}
            />
          );
        })}
      </UserList>
    </Layout>
  );
};

export default UserRankSlider;
