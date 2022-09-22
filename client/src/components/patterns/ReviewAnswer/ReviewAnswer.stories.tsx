import ReviewAnswer from './ReviewAnswer';
import styled from 'styled-components';

export default {
  title: 'Patterns/ReviewAnswer',
  component: ReviewAnswer,
};

export const all = () => (
  <Layout>
    <div>예시</div>
    <br />
    <ReviewAnswer
      nickname={'테스트 닉네임'}
      content={
        '테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트'
      }
      date={'2022-05-05'}
    />
  </Layout>
);

export const Layout = styled.div`
  width: 500px;
`;
