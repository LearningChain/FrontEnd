import {
  Layout,
  Text,
  UserId,
  UserDescription,
  UserInfo,
  ContentsCount,
  ReccomandsCount,
  ButtonBox,
} from './InfoCard.styles';
import Avatar from '../../commons/Avatar/Avatar';
import Button from '../../commons/Button/Button';

export interface InfoCardProps {
  theme?: string;
  user?: UserProps;
  name?: string;
  description?: string;
  contentscount?: number;
  recommandscount?: number;
}

export interface UserProps {
  name?: string;
  description?: string;
  contentscount?: number;
  recommandscount?: number;
}

const InfoCard = ({theme, user, ...props}: InfoCardProps) => {
  return (
    <Layout theme={theme} {...props}>
      <Avatar
        pattern={'noneIconAvater'}
        useImg={'/testlink'}
        width={'50px'}
        height={'50px'}
      />
      <Text>
        <UserId>{props?.name}</UserId>
        <UserDescription>{props?.description}</UserDescription>
        <UserInfo>
          <ContentsCount>콘텐츠 {props?.contentscount}</ContentsCount>
          <ReccomandsCount>추천 {props?.recommandscount}</ReccomandsCount>
        </UserInfo>
      </Text>
      <ButtonBox>
        <Button bright={theme} pattern={'roundModalSmall'}>
          <div>팔로우</div>
        </Button>
      </ButtonBox>
    </Layout>
  );
};

export default InfoCard;
