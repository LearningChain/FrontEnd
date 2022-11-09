import ContentCardList from '../../../components/layouts/ContentCardList';
import axios from 'axios';
import {useState} from 'react';
import {useQuery, useQueryClient} from 'react-query';
import {
  DummyBox,
  FilterButton,
  FilterButtons,
  Layout,
  Title,
  TitleBox,
} from './ContentDetail.styles';
import {ContentCardProps} from '../../../components/patterns/ContentCard/ContentCard';
import {useMediaQuery} from 'react-responsive';
import SwitchList from '../../../components/layouts/SwitchList';
import mockAxios from '../../../mocked';
import Icon from '../../../components/foundations/Icon/Icon';
import Button from '../../../components/commons/Button';
import ContentFilterModal from '../ContentFilterModal/ContentFilterModal';

// 데이터를 모킹하는 로직입니다.
const makeMockedData = (category: string) =>
  new Array(5).fill(0).map((_, index) => ({
    id: index + 1,
    title: `${category} 플랫폼이 집어삼키는 세상 ${index + 1}`,
    writer: '글쓴이',
    description:
      '플랫폼 혁신이 주역이 되는 기업, 플랫폼이 기업의 성패를 좌우할것이다.',
  }));

['전체', '개발', '디자인', '기획', '스타트업'].forEach((name) => {
  new Array(10).fill(0).map(() => {
    mockAxios
      .onGet('/content/list', {params: {category: name}})
      .reply(200, makeMockedData(name));
  });
});

interface ApiData {
  [index: string]: ContentCardProps[];
}

const getContent = (category: string) => async () => {
  const {data} = await axios.get(`/main/content`, {params: {category}});
  return data;
};

const ContentDetail = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [filterSelected, setFilterSelected] = useState(false);
  const [data, setData] = useState<any>();
  const [filterInfo, setFilterInfo] = useState<{
    [index: string]: {[index: string]: string};
  }>({
    매체: {도서: 'light', 영상: 'light', 아티클: 'light'},
    해시태그: {
      피그마: 'light',
      오토레이아웃: 'light',
      스타트업: 'light',
      'UI/UX': 'light',
      개발자: 'light',
      개발용어: 'light',
      IT공부: 'light',
    },
  });
  const mobile = useMediaQuery({maxWidth: 768});
  const queryClient = useQueryClient();

  const {isLoading} = useQuery<unknown, unknown, ApiData>(
    ['content', 'list', selectedCategory],
    getContent(selectedCategory),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data) => {
        setData(
          queryClient.getQueryData<ContentCardProps[]>([
            'content',
            'list',
            selectedCategory,
          ]) as ContentCardProps[],
        );
      },
      onError: (e) => {},
    },
  );

  return (
    <>
      <Layout>
        <TitleBox>
          <Title>콘텐츠</Title>
          <Button
            onClick={() => {
              setFilterSelected(!filterSelected);
            }}
            pattern="iconAlone"
          >
            <Icon icon="filter" />
          </Button>
        </TitleBox>
        <SwitchList
          pattern={mobile ? 'mobileHome' : 'desktopHome'}
          selected={selectedCategory}
          switchInfos={['전체', '개발', '디자인', '기획', '스타트업']}
          change={(keyword) => {
            setSelectedCategory(keyword);
          }}
        />
        <FilterButtons>
          {Object.keys(filterInfo)
            .map((k) => Object.entries(filterInfo[k]))
            .flat()
            .filter(([k, v]) => v === 'dark')
            .map(([k, v]) => {
              return (
                <FilterButton key={k}>
                  <div>{k}</div>
                  <Button
                    pattern={'iconAlone'}
                    background={'#ACED22'}
                    onClick={() => {
                      const newFilterInfo = JSON.parse(
                        JSON.stringify(filterInfo),
                      );
                      Object.keys(newFilterInfo).forEach((category) => {
                        if (newFilterInfo[category][k] !== undefined) {
                          newFilterInfo[category][k] = 'light';
                        }
                      });
                      setFilterInfo(newFilterInfo);
                    }}
                  >
                    <Icon
                      icon="deleteX"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      stroke=""
                    />
                  </Button>
                </FilterButton>
              );
            })}
        </FilterButtons>
        {isLoading ? (
          <div>로딩중</div>
        ) : (
          <>
            <ContentCardList data={data} />
            <DummyBox />
          </>
        )}
      </Layout>
      {filterSelected ? (
        <ContentFilterModal
          setFilterSelected={setFilterSelected}
          filterInfo={filterInfo}
          setFilterInfo={setFilterInfo}
        />
      ) : null}
    </>
  );
};

export default ContentDetail;
