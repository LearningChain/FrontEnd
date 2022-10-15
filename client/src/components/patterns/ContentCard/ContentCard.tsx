import {Layout, Text, Title, Description, Writer} from './ContentCard.styles';
import ImageBox from '../../commons/ImageBox/ImageBox';

export interface ContentCardProps {
  title?: string;
  description?: string;
  writer?: string;
}

const ContentCard = ({...props}: ContentCardProps) => {
  return (
    <Layout {...props}>
      <ImageBox pattern={'cardImage'} src={'/test'} alt={'test'} />
      <Text>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <Writer>by. {props.writer}</Writer>
      </Text>
    </Layout>
  );
};

export default ContentCard;
