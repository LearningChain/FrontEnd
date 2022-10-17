import {
  Layout,
  Text,
  UserNickname,
  UserDescription,
  UserCountInfo,
  ContentsCount,
  ReccomandsCount,
  ButtonBox,
  SubLayout,
} from './InfoCard.styles';
import Avatar from '../../commons/Avatar/Avatar';
import Button from '../../commons/Button/Button';

export interface InfoCardProps {
  theme?: string;
  user?: UserProps;
  nickname?: string;
  description?: string;
  contentscount?: number;
  recommandscount?: number;
}

export interface UserProps {
  nickname?: string;
  description?: string;
  contentscount?: number;
  recommandscount?: number;
}

const InfoCard = ({...props}: UserProps) => {
  return (
    <Layout {...props}>
      <SubLayout>
        <Avatar
          pattern={'noneIconAvater'}
          useImg={'/testlink'}
          width={'65px'}
          height={'65px'}
        />
        <Text>
          <UserNickname>{props?.nickname}</UserNickname>
          <UserDescription>{props?.description}</UserDescription>
          <UserCountInfo>
            <ContentsCount>콘텐츠 {props?.contentscount}</ContentsCount>
            <ReccomandsCount>추천 {props?.recommandscount}</ReccomandsCount>
          </UserCountInfo>
        </Text>
        <ButtonBox>
          <Button bright={'light'} pattern={'filter'}>
            <div>팔로우</div>
          </Button>
        </ButtonBox>
      </SubLayout>
    </Layout>
  );
};

export default InfoCard;
