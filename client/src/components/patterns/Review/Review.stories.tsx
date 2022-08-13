import Review from './Review';

export default {
  title: 'Patterns/Review',
  component: Review,
};

export const all = () => (
  <>
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
      data={'2022-05-05'}
    />
  </>
);
