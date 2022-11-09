import NotificationList from '../../../components/layouts/NotificationList';
import Button from '../../../components/commons/Button';
import Icon from '../../../components/foundations/Icon/Icon';
import {DummyBox, Layout, Title, TitleBlock} from './AlarmList.styles';
import {useQuery} from 'react-query';
import axios from 'axios';
import mockAxios from '../../../mocked';

interface ApiData {
  user: string;
  paragraph: string;
  active: boolean;
  date: Date;
}

const makeMockedData = () =>
  new Array(5).fill(0).map((_, index) => ({
    user: '/test',
    paragraph:
      '테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.',
    active: Boolean(Math.floor(Math.random() * 2)),
    date: new Date(new Date().getTime() - (index + 1) * 90000000),
  }));

mockAxios.onGet('/main/alarm').reply(200, makeMockedData());

const getContent = () => async () => {
  const {data} = await axios.get(`/main/alarm`);
  return data;
};

const AlarmList = () => {
  const {data} = useQuery<unknown, unknown, ApiData[]>(
    ['main', 'alarm'],
    getContent(),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data) => {},
      onError: (e) => {},
    },
  );
  if (data !== undefined) {
    return (
      <Layout>
        <TitleBlock>
          <Button pattern={'iconAlone'} background={'#ACED22'}>
            <Icon
              icon="leftArrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke=""
            />
          </Button>
          <Title>알림</Title>
          <DummyBox />
        </TitleBlock>
        <NotificationList itemList={data} />
      </Layout>
    );
  }
  return <></>;
};

export default AlarmList;
