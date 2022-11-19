import Button from '../../../components/commons/Button';
import {Layout} from './ButtonList.styles';

export interface ButtonListProps {
  /* 버튼 내에 들어갈 데이터 */
  buttonInfos: {[index: string]: string};
  /* 버튼 유형 결정 */
  pattern: string;
  /* 클릭했을 때 호출할 함수 */
  change: (keyword: string) => void;
  /* 스크롤할지 밑으로 내릴지 결정하는 변수*/
  wrap: string;
}

const ButtonList = ({...props}: ButtonListProps) => {
  return (
    <Layout wrap={props.wrap}>
      {Object.keys(props.buttonInfos).map((keyword) => {
        return (
          <Button
            pattern={props.pattern}
            bright={props.buttonInfos[keyword]}
            key={keyword}
            onClick={() => props.change(keyword)}
          >
            {keyword}
          </Button>
        );
      })}
    </Layout>
  );
};

export default ButtonList;
