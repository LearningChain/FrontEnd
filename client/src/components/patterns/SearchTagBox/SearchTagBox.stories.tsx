import SearchTagBox from './SearchTagBox';

export default {
  title: 'Patterns/SearchTagBox',
  component: SearchTagBox,
};

export const all = () => (
  <>
    <div>내가 검색 한</div>
    <br />
    <SearchTagBox
      title={'내가 검색 한'}
      keywords={['피그마', '어도비', 'XD']}
    />
    <br />
    <br />
    <div>지금 가장 많이 검색되는</div>
    <br />
    <SearchTagBox
      title={'지금 가장 많이 검색되는'}
      keywords={[
        'UI/UX',
        'javascript',
        'python',
        'PHP',
        'UI/UX',
        'javascript',
        'python',
        'PHP',
        'UI/UX',
        'javascript',
        'python',
        'PHP',
        'UI/UX',
        'javascript',
        'python',
        'PHP',
      ]}
    />
    <br />
  </>
);
