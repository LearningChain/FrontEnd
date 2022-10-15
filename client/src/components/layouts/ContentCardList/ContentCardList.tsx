import ContentCard, {
  ContentCardProps,
} from '../../patterns/ContentCard/ContentCard';
import {Layout} from './ContentCardList.styles';

export interface ContentCardListProps {
  data: ContentCardProps[] | undefined;
}

const ContentCardList = ({...props}: ContentCardListProps) => {
  return (
    <Layout>
      {props.data?.map((itemObj, index) => {
        return (
          <ContentCard
            title={itemObj.title}
            description={itemObj.description}
            writer={itemObj.writer}
            key={index}
          />
        );
      })}
    </Layout>
  );
};

export default ContentCardList;
