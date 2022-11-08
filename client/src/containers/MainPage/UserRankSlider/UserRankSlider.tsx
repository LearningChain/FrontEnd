import Icon from '../../../components/foundations/Icon/Icon';
import Button from '../../../components/commons/Button';
import InfoCard from '../../../components/patterns/InfoCard';
import {
  ButtonWrap,
  DummyBox,
  Layout,
  Title,
  TitleBlock,
  UserList,
} from './UserRankSlider.styles';
import axios from 'axios';
import {useQuery} from 'react-query';
import mockAxios from '../../../mocked';

const makeMockedData = () =>
  new Array(10).fill(0).map((_, index) => ({
    id: index + 1,
    name: '승주',
    description: 'react공부중',
    contentscount: 44,
    recommandscount: 1445,
  }));

mockAxios.onGet('/main/toprank').reply(200, makeMockedData());

interface userInfo {
  id: number;
  name?: string;
  description?: string;
  contentscount?: number;
  recommandscount?: number;
}
type ApiData = userInfo[];
const getContent = () => async () => {
  const {data} = await axios.get(`/main/toprank`);
  return data;
};
const UserRankSlider = () => {
  const {data, isLoading} = useQuery<unknown, unknown, ApiData>(
    ['main', 'toprank'],
    getContent(),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data) => {},
      onError: (e) => {},
    },
  );
  if (isLoading) {
    return <div>로딩중</div>;
  } else {
    return (
      <Layout>
        <TitleBlock>
          <DummyBox></DummyBox>
          <Title>Top 러닝체인 회원</Title>
          <ButtonWrap>
            <Button pattern={'iconWith'}>
              <div>더보기</div>
              <Icon
                icon={'rightArrowNoTail'}
                width={'20'}
                height={'20'}
                viewBox={'1 1 20 20'}
              />
            </Button>
          </ButtonWrap>
        </TitleBlock>
        <UserList>
          {data?.map((user, index) => {
            return (
              <InfoCard
                id={user.id}
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
  }
};

export default UserRankSlider;
