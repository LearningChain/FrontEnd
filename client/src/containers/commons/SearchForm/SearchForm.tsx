import Search from '../../../components/patterns/Search';
import Button from '../../../components/commons/Button';
import {
  InputBox,
  LatestKeywordBox,
  LatestSearchBox,
  LatestSearchList,
  Layout,
  PopularKeywordBox,
  PopularSearchBox,
  PopulstSearchList,
  RankChange,
  SubTitle,
  SubTitleBlock,
  TitleBox,
} from './SearchForm.styles';
import Icon from '../../../components/foundations/Icon/Icon';
import mockAxios from '../../../mocked';
import {useQuery} from 'react-query';
import axios from 'axios';
import {useEffect, useState} from 'react';
const popular = {
  list: [
    {rank: 1, keyword: '디자인시스템', change: 'up'},
    {rank: 2, keyword: '데이터', change: 'up'},
    {rank: 3, keyword: 'Data Driven', change: 'down'},
    {rank: 4, keyword: 'HTTP', change: 'noChange'},
    {rank: 5, keyword: 'UI/UX', change: 'up'},
    {rank: 6, keyword: '아티클', change: 'down'},
    {rank: 7, keyword: '스타트업', change: 'noChange'},
    {rank: 8, keyword: 'PM', change: 'noChange'},
    {rank: 9, keyword: 'javascript', change: 'up'},
    {rank: 10, keyword: '커리어', change: 'down'},
  ],
  date: '11.01 00:00',
};

mockAxios.onGet('/search/popular').reply(200, popular);

interface searchInfo {
  rank: number;
  keyword: string;
  change: string;
}
interface ApiData {
  list: searchInfo[];
  date: string;
}

const getContent = () => async () => {
  const {data} = await axios.get(`/search/popular`);
  return data;
};
const SearchForm = () => {
  const {data} = useQuery<unknown, unknown, ApiData>(
    ['search', 'popular'],
    getContent(),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data) => {},
      onError: (e) => {},
    },
  );
  const [latestSearch, setLatestSearch] = useState<string[]>([]);
  useEffect(() => {
    const output = localStorage.getItem('latestSearch');
    if (output !== null) {
      setLatestSearch(JSON.parse(output));
    }
  });

  return (
    <Layout>
      <TitleBox>
        <Button pattern={'iconAlone'} background={'#ACED22'} onClick={() => {}}>
          <Icon
            icon="leftArrow"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke=""
          />
        </Button>
      </TitleBox>
      <InputBox>
        <Search
          placeHold="러닝체인 전체 검색"
          click={(ref) => {
            if (ref.current !== null) {
              setLatestSearch([...latestSearch, ref.current.value]);
              localStorage.setItem(
                'latestSearch',
                JSON.stringify([...latestSearch, ref.current.value]),
              );
            }
          }}
        />
      </InputBox>
      <LatestSearchBox>
        <SubTitleBlock>
          <SubTitle>최근 검색어</SubTitle>
          <Button
            pattern="text"
            onClick={() => {
              setLatestSearch([]);
              localStorage.setItem('latestSearch', JSON.stringify([]));
            }}
          >
            기록삭제
          </Button>
        </SubTitleBlock>
        <LatestSearchList>
          {latestSearch.map((keyword) => {
            return <LatestKeywordBox key={keyword}>{keyword}</LatestKeywordBox>;
          })}
        </LatestSearchList>
      </LatestSearchBox>
      <PopularSearchBox>
        <SubTitleBlock>
          <SubTitle>인기 검색어</SubTitle>
          <div>{data?.date} 기준</div>
        </SubTitleBlock>
        <PopulstSearchList>
          {data?.list?.map(({rank, keyword, change}) => {
            return (
              <PopularKeywordBox key={keyword}>
                <div>{rank}</div>
                <div>{keyword}</div>
                <RankChange>
                  <Icon
                    icon={change}
                    width={change === 'noChange' ? '12' : '12'}
                    height={change === 'noChange' ? '2' : '12'}
                    viewBox={change === 'noChange' ? '0 0 12 2' : '0 0 12 12'}
                    stroke=""
                  />
                </RankChange>
              </PopularKeywordBox>
            );
          })}
        </PopulstSearchList>
      </PopularSearchBox>
    </Layout>
  );
};

export default SearchForm;
