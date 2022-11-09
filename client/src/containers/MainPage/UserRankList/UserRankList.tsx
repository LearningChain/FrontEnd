import mockAxios from '../../../mocked';
import axios from 'axios';
import {useMutation, useQuery} from 'react-query';
import InfoCard from '../../../components/patterns/InfoCard';
import {
  DummyBox,
  Layout,
  Title,
  TitleBlock,
  UserList,
} from './UserRankList.styles';
import Button from '../../../components/commons/Button';
import Icon from '../../../components/foundations/Icon/Icon';

interface Data {
  users: {
    id: number;
    name: string;
    description?: string;
    followed: boolean;
  }[];
  myInfo: {
    id: number;
    name: string;
    description?: string;
    rank: number;
  };
}

const makeMockedData = () =>
  new Array(10).fill(0).map((_, index) => ({
    id: index + 1,
    name: `test ${index + 1}`,
    description: `글쓴이 ${index + 1}`,
    followed: Boolean(Math.floor(Math.random() * 2)),
  }));

mockAxios.onGet('/main/ranklist').reply(200, {
  users: makeMockedData(),
  myInfo: {
    id: 11,
    name: `test me`,
    description: `글쓴이 me`,
    rank: 150,
  },
});

interface UserRankListProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserRankList = ({setModal}: UserRankListProps) => {
  const getContent = () => async () => {
    const {data} = await axios.get(`/main/ranklist`);
    return data;
  };
  const {data} = useQuery<unknown, unknown, Data>(
    ['main', 'ranklist'],
    getContent(),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (e) => {
        console.log(e);
      },
    },
  );

  const follow = useMutation((user: number) =>
    axios.post('http://localhost:8080/follow', user),
  );
  const unFollow = useMutation((user: number) =>
    axios.post('http://localhost:8080/unfollow', user),
  );
  const onFollow = (user: number) => {
    follow.mutate(user);
  };
  const onUnFollow = (user: number) => {
    unFollow.mutate(user);
  };

  if (data === undefined) {
    return <div>로딩중</div>;
  } else {
    return (
      <Layout>
        <TitleBlock>
          <Button
            pattern={'iconAlone'}
            background={'#ACED22'}
            onClick={() => {
              setModal(false);
            }}
          >
            <Icon
              icon="leftArrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke=""
            />
          </Button>
          <Title>TOP 러닝체인 회원</Title>
          <DummyBox />
        </TitleBlock>
        <UserList>
          {data.users.map((user, index) => {
            return (
              <InfoCard
                id={user.id}
                nickname={user.name}
                description={user.description}
                key={index}
                shorted={true}
                rank={index + 1}
                followed={user.followed}
                click={user.followed ? onUnFollow : onFollow}
              />
            );
          })}
          <br />
          <br />
          <br />
          <InfoCard
            id={data.myInfo.id}
            nickname={data.myInfo.name}
            description={data.myInfo.description}
            key={data.myInfo.id}
            shorted={true}
            rank={data.myInfo.rank}
          />
        </UserList>
      </Layout>
    );
  }
};

export default UserRankList;
