import ContentCardList from '../../../components/layouts/ContentCardList';
import axios from 'axios';
import {useState} from 'react';
import {useQuery} from 'react-query';
import Switch from '../../../components/commons/Switch';
import ButtonList from '../../../components/layouts/ButtonList';
import {Layout, Switches, Title} from './ContentRecommendation.styles';
const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(axios);
mock.onGet('/home/content').reply(200, [
  {
    id: 1,
    title: '플랫폼이 집어삼키는 세상',
    writer: '글쓴이',
    description:
      '플랫폼 혁신이 주역이 되는 기업, 플랫폼이 기업의 성패를 좌우할것이다.',
  },
  {
    id: 2,
    title: '플랫폼이 집어삼키는 세상',
    writer: '글쓴이',
    description:
      '플랫폼 혁신이 주역이 되는 기업, 플랫폼이 기업의 성패를 좌우할것이다.',
  },
  {
    id: 3,
    title: '플랫폼이 집어삼키는 세상',
    writer: '글쓴이',
    description:
      '플랫폼 혁신이 주역이 되는 기업, 플랫폼이 기업의 성패를 좌우할것이다.',
  },
  {
    id: 4,
    title: '플랫폼이 집어삼키는 세상',
    writer: '글쓴이',
    description:
      '플랫폼 혁신이 주역이 되는 기업, 플랫폼이 기업의 성패를 좌우할것이다.',
  },
  {
    id: 5,
    title: '플랫폼이 집어삼키는 세상',
    writer: '글쓴이',
    description:
      '플랫폼 혁신이 주역이 되는 기업, 플랫폼이 기업의 성패를 좌우할것이다.',
  },
  {
    id: 6,
    title: '플랫폼이 집어삼키는 세상',
    writer: '글쓴이',
    description:
      '플랫폼 혁신이 주역이 되는 기업, 플랫폼이 기업의 성패를 좌우할것이다.',
  },
  {
    id: 7,
    title: '플랫폼이 집어삼키는 세상',
    writer: '글쓴이',
    description:
      '플랫폼 혁신이 주역이 되는 기업, 플랫폼이 기업의 성패를 좌우할것이다.',
  },
  {
    id: 8,
    title: '플랫폼이 집어삼키는 세상',
    writer: '글쓴이',
    description:
      '플랫폼 혁신이 주역이 되는 기업, 플랫폼이 기업의 성패를 좌우할것이다.',
  },
  {
    id: 9,
    title: '플랫폼이 집어삼키는 세상',
    writer: '글쓴이',
    description:
      '플랫폼 혁신이 주역이 되는 기업, 플랫폼이 기업의 성패를 좌우할것이다.',
  },
  {
    id: 10,
    title: '플랫폼이 집어삼키는 세상',
    writer: '글쓴이',
    description:
      '플랫폼 혁신이 주역이 되는 기업, 플랫폼이 기업의 성패를 좌우할것이다.',
  },
]);
interface Data {
  id: number;
  title: string;
  writer: string;
  description: string;
}
const getContent = async () => {
  const {data} = await axios.get('/home/content');
  return data;
};
const ContentRecommendation = () => {
  const [swicthSelected, setSwitchSelected] = useState([true, false]);
  const [buttonStatus, setButtonStatus] = useState<{[index: string]: string}>({
    전체: 'black',
    개발: 'light',
    디자인: 'light',
    기획: 'light',
    스타트업: 'light',
  });
  const {data} = useQuery<unknown, unknown, Data[]>(
    ['main', 'content'],
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

  return (
    <Layout>
      <Title>추천 게시글</Title>
      <Switches>
        <Switch
          pattern={'mobileHome'}
          selected={swicthSelected[0]}
          onClick={(e) => {
            setSwitchSelected([true, false]);
            e?.currentTarget.TEXT_NODE;
          }}
        >
          콘텐츠
        </Switch>
        <Switch
          pattern={'mobileHome'}
          selected={swicthSelected[1]}
          onClick={() => {
            setSwitchSelected([false, true]);
          }}
        >
          스터디
        </Switch>
      </Switches>
      <ButtonList
        pattern={'filter'}
        buttonInfos={buttonStatus}
        change={(keyword) => {
          setButtonStatus({
            전체: 'light',
            개발: 'light',
            디자인: 'light',
            기획: 'light',
            스타트업: 'light',
            [keyword]: 'dark',
          });
        }}
      />
      <ContentCardList data={data} />
    </Layout>
  );
};

export default ContentRecommendation;
