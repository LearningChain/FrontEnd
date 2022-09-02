import {Layout} from './CommentInput.styles';
import Input from '../../commons/Input'
import Button from '../../commons/Button'

export interface CommentInputProps {
  theme: string;
  placeHold: string;
}

const CommentInput = ({theme, placeHold, ...props}: CommentInputProps) => {
  return (
    <Layout {...props}>
      <Input theme={theme} status="default" pattern={'CommentInput'} placeholder={placeHold}/>
      <Button pattern={'roundModal'} bright={theme}>등록</Button>
    </Layout>
  );
};

export default CommentInput;
