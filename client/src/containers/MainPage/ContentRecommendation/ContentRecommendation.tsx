import ContentCardList from '../../../components/layouts/ContentCardList';
import axios from 'axios';
import {useState} from 'react';
import {useQuery, useQueryClient} from 'react-query';
import ButtonList from '../../../components/layouts/ButtonList';
import {AddContents, Layout, Title} from './ContentRecommendation.styles';
import {ContentCardProps} from '../../../components/patterns/ContentCard/ContentCard';
import {useMediaQuery} from 'react-responsive';
import SwitchList from '../../../components/layouts/SwitchList';

// 데이터를 모킹하는 로직입니다.
const MockAdapter = require('axios-mock-adapter');
const mock = new MockAdapter(axios, {delayResponse: 2000});
const makeMockedData = (page: number, category: string) =>
  new Array(5).fill(0).map((_, index) => ({
    id: page * 5 + index + 1,
    title: `${category} 플랫폼이 집어삼키는 세상 ${page * 5 + index + 1}`,
    writer: '글쓴이',
    description:
      '플랫폼 혁신이 주역이 되는 기업, 플랫폼이 기업의 성패를 좌우할것이다.',
  }));

['전체', '개발', '디자인', '기획', '스타트업'].forEach((name) => {
  new Array(10).fill(0).map((_, index) => {
    mock
      .onGet('/main/content', {params: {category: name, page: index + 1}})
      .reply(200, makeMockedData(index, name));
  });
});

interface ApiData {
  [index: string]: ContentCardProps[];
}

const getContent = (category: string, page: number) => async () => {
  const {data} = await axios.get(`/main/content`, {params: {category, page}});
  return data;
};

const ContentRecommendation = () => {
  const [swicthSelected, setSwitchSelected] = useState('콘텐츠');
  const [contentStatus, setContentStatus] = useState({
    category: '전체',
    page: 1,
  });
  const [data, setData] = useState<any>();
  const [keepPreviousData, setKeepPreviousData] = useState(true);
  const [buttonStatus, setButtonStatus] = useState<{[index: string]: string}>({
    전체: 'dark',
    개발: 'light',
    디자인: 'light',
    기획: 'light',
    스타트업: 'light',
  });
  const mobile = useMediaQuery({maxWidth: 768});
  const queryClient = useQueryClient();

  const {isLoading, isFetching} = useQuery<unknown, unknown, ApiData>(
    [
      'main',
      'recommend',
      'content',
      contentStatus.category,
      contentStatus.page,
    ],
    getContent(contentStatus.category, contentStatus.page),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      keepPreviousData,
      onSuccess: (data) => {
        setData(
          new Array(contentStatus.page)
            .fill(0)
            .map((_, index) => {
              return queryClient.getQueryData<ContentCardProps[]>([
                'main',
                'recommend',
                'content',
                contentStatus.category,
                index + 1,
              ]) as ContentCardProps[];
            })
            .flat(),
        );
      },
      onError: (e) => {},
    },
  );

  const changeButtonType = (keyword: string) => {
    const initalStatus: {[index: string]: string} = {};
    Object.keys(buttonStatus).forEach((status) => {
      initalStatus[status] = 'light';
    });
    initalStatus[keyword] = 'dark';
    setButtonStatus(initalStatus);
  };

  return (
    <Layout>
      <Title>추천 게시글</Title>
      <SwitchList
        pattern={mobile ? 'mobileHome' : 'desktopHome'}
        selected={swicthSelected}
        switchInfos={['콘텐츠', '스터디']}
        change={(keyword) => {
          setSwitchSelected(keyword);
        }}
      />
      <ButtonList
        pattern={'filter'}
        buttonInfos={buttonStatus}
        change={(keyword) => {
          changeButtonType(keyword);
          setContentStatus({category: keyword, page: 1});
          setKeepPreviousData(false);
        }}
      />
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <>
          <ContentCardList data={data} />
          <AddContents
            onClick={() => {
              setContentStatus({
                ...contentStatus,
                page: contentStatus.page + 1,
              });
              setKeepPreviousData(true);
            }}
          >
            {isFetching ? '로딩중' : '더보기'}
          </AddContents>
        </>
      )}
    </Layout>
  );
};

export default ContentRecommendation;
