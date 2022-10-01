import Review from '../../../components/patterns/Review';
import ReviewAnswer from '../../../components/patterns/ReviewAnswer';
import {Layout} from './ContentReviewList.styles';

export interface ContentReivewListProps {
  reviewData: {
    id: number;
    nickname: string;
    good: string;
    bad: string;
    date: string;
    anwser: {
      id: number;
      nickname: string;
      content: string;
      date: string;
    }[];
  }[];
}

const ContentReviewList = ({...props}: ContentReivewListProps) => {
  return (
    <Layout>
      {props.reviewData.map((review) => {
        return (
          <>
            <Review
              nickname={review.nickname}
              good={review.good}
              bad={review.bad}
              date={review.date}
              key={review.id}
            />
            <Layout>
              {review.anwser.map((reviewAnswer) => {
                return (
                  <ReviewAnswer
                    nickname={reviewAnswer.nickname}
                    content={reviewAnswer.content}
                    date={reviewAnswer.date}
                    key={reviewAnswer.id}
                  />
                );
              })}
            </Layout>
          </>
        );
      })}
    </Layout>
  );
};

export default ContentReviewList;
