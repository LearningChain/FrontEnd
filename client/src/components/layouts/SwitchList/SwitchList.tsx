import Switch from '../../../components/commons/Switch';
import {Layout} from './SwitchList.styles';

export interface ButtonListProps {
  /* 버튼 내에 들어갈 데이터 */
  switchInfos: string[];
  /* 버튼 유형 결정 */
  pattern: string;
  /* 클릭했을 때 호출할 함수 */
  change: (keyword: string) => void;
  /* 선택된 스위치 */
  selected: string;
}

const SwitchList = ({...props}: ButtonListProps) => {
  return (
    <Layout>
      {props.switchInfos.map((keyword) => {
        return (
          <Switch
            pattern={props.pattern}
            selected={props.selected === keyword ? true : false}
            onClick={() => {
              props.change(keyword);
            }}
            key={keyword}
          >
            {keyword}
          </Switch>
        );
      })}
    </Layout>
  );
};

export default SwitchList;
