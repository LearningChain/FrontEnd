import StudyCard from '../../../components/patterns/StudyCard/StudyCard';
import { StudyCardProps } from '../../../components/patterns/StudyCard/StudyCard';
import {Layout} from './StudyCardList.styles';

export interface StudyCardListProps {
  data: StudyCardProps[];
}

const StudyCardList = ({...props}: StudyCardListProps) => {
  return (
    <Layout>
      {props.data.map((itemObj, index) => {
        return (
          <StudyCard
            duedate={itemObj.duedate}
            title={itemObj.title}
            description={itemObj.description}
            keywords={itemObj.keywords}
            key={itemObj.title}
          />
        );
      })}
    </Layout>
  );
};

export default StudyCardList;
