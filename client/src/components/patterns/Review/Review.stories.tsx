import Review from './Review';
import styled from 'styled-components';

export default {
  title: 'Patterns/Review',
  component: Review,
};

export const all = () => (
  <Layout>
    <div>예시</div>
    <br />
    <Review
      nickname={'테스트 닉네임'}
      good={
        '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트'
      }
      bad={
        '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트'
      }
      date={'2022-05-05'}
    />
  </Layout>
);

export const Layout = styled.div`
  width: 500px;
`;