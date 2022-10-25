import axios from 'axios';
import {useMutation, useQuery} from 'react-query';
import InfoCard from '../../../components/patterns/InfoCard';
import {Layout, UserList} from './UserRankList.styles';

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
const UserRankList = () => {
  const getContent = async () => {
    const {data} = await axios.get('/home/content');
    return data;
  };
  const {data} = useQuery<unknown, unknown, Data>(
    ['main', 'ranklist'],
    getContent,
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
        </UserList>
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
      </Layout>
    );
  }
};

export default UserRankList;
