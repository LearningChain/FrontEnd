import {
  Layout,
  Text,
  Title,
  Description,
  Writer,
  DesktopLayout,
} from './ContentCard.styles';
import ImageBox from '../../commons/ImageBox/ImageBox';
import {useMediaQuery} from 'react-responsive';

export interface ContentCardProps {
  id: number;
  title: string;
  description: string;
  writer: string;
}

const ContentCard = ({...props}: ContentCardProps) => {
  const mobile = useMediaQuery({maxWidth: 768});
  if (mobile) {
    return (
      <Layout>
        <ImageBox pattern={'cardImage'} src={'/test'} alt={'test'} />
        <Text>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
          <Writer>by. {props.writer}</Writer>
        </Text>
      </Layout>
    );
  } else {
    return (
      <DesktopLayout>
        <ImageBox pattern={'cardImageDesktop'} src={'/test'} alt={'test'} />
        <Text>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
          <Writer>by. {props.writer}</Writer>
        </Text>
      </DesktopLayout>
    );
  }
};

export default ContentCard;
