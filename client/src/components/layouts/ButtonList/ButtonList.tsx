import Button from '../../../components/commons/Button';
import {Layout} from './ButtonList.styles';

export interface ButtonListProps {
  /* 버튼 내에 들어갈 데이터 */
  childrenArr: string[];
  /* 박스 너비 결정*/
  boxWidth?: string;
  /* 박스 높이 결정*/
  boxHeight?: string;
  /* 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /* 버튼 유형 결정 */
  pattern: string;
  /* 버튼 밝기 결정 */
  bright?: string;
  /* 버튼 크기 결정 */
  size?: string;
  /* 배경색 결정 */
  background?: string;
  /* 글자색상 결정 */
  color?: string;
}

const ButtonList = ({...props}: ButtonListProps) => {
  return (
    <Layout boxWidth={props.boxWidth} boxHeight={props.boxHeight}>
      {props.childrenArr.map((keyword) => {
        return (
          <Button {...props} key={keyword}>
            {keyword}
          </Button>
        );
      })}
    </Layout>
  );
};

export default ButtonList;
