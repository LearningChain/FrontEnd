import ContentReviewList from './ContentReviewList';

export default {
  title: 'Container/ContentReviewList',
  component: ContentReviewList,
};

export const all = () => (
  <>
    <div>예시</div>
    <br />
    <ContentReviewList
      reviewData = {[{
        id:1,
        nickname: "test1",
        good: "testGood!!!!!testGood!!!!!testGood!!!!!testGood!!!!!testGood!!!!!testGood!!!!!testGood!!!!!testGood!!!!!testGood!!!!!testGood!!!!!testGood!!!!!testGood!!!!!",
        bad: "testBad!!!!!",
        date: "2022-01-01",
        anwser:[{
          id:1,
            nickname: "test2",
            content:"testContent",
            date: "2022-01-01",
          }]
      },{
        id:2,
        nickname: "test4",
        good: "testGood!!!!!",
        bad: "testBad!!!!!",
        date: "2022-01-01",
        anwser:[{
          id:2,
            nickname: "test3",
            content:"testContent",
            date: "2022-01-01",
          },{
            id:3,
            nickname: "test3",
            content:"testContent",
            date: "2022-01-01",
          }]
      }]}
    />
  </>
);
