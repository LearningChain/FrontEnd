import ContentCard, {
  ContentCardProps,
} from '../../patterns/ContentCard/ContentCard';
import {Layout} from './ContentCardList.styles';

export interface ContentCardListProps {
  theme?: string;
  data: ContentCardProps[];
}

const ContentCardList = ({theme, ...props}: ContentCardListProps) => {
  console.log(props);
  return (
    <Layout>
      {props.data?.map((itemObj, index) => {
        return (
          <ContentCard
            theme={theme}
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
