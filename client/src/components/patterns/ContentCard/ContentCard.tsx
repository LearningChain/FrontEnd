import {Layout, Text, Title, Description, Writer} from './ContentCard.styles';
import ImageBox from '../../commons/ImageBox/ImageBox';

export interface ContentCardProps {
  theme?: string;
  title?: string;
  description?: string;
  writer?: string;
}

const ContentCard = ({theme, title, description, writer, ...props}: ContentCardProps) => {
  return (
    <Layout theme={theme} {...props}>
      <ImageBox
        pattern={'cardImage'}
        src={'/test'}
        alt={'test'}
      />
      <Text>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Writer>by. {writer}</Writer>
      </Text>
    </Layout>
  );
};

export default ContentCard;
