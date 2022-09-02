import CommentInput from './CommentInput';

export default {
  title: 'Patterns/CommentInput',
  component: CommentInput,
};

export const all = () => (
  <>
    <div>예시</div>
    <br />
    <CommentInput theme='dark' placeHold="댓글을 입력하세요." />
    <br />
  </>
);
