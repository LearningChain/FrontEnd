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
  MobileSubLayout,
  MobileText,
  Rank,
} from './InfoCard.styles';
import Avatar from '../../commons/Avatar/Avatar';
import Button from '../../commons/Button/Button';

export interface InfoCardProps {
  id: number;
  nickname?: string;
  description?: string;
  contentscount?: number;
  recommandscount?: number;
  shorted?: boolean;
  rank?: number;
  followed?: boolean;
  click?: (user: number) => void;
}

const InfoCard = ({...props}: InfoCardProps) => {
  if (props.shorted) {
    return (
      <Layout>
        <MobileSubLayout>
          <Rank>{props.rank}</Rank>
          <Avatar
            pattern={'noneIconAvater'}
            useImg={'/testlink'}
            width={'49px'}
            height={'49px'}
          />
          <MobileText>
            <UserNickname>{props?.nickname}</UserNickname>
            <UserDescription>{props?.description}</UserDescription>
          </MobileText>
          {props.followed !== undefined ? (
            <ButtonBox>
              <Button
                bright={props.followed ? 'dark' : 'light'}
                pattern={'filter'}
                onClick={() => {
                  props.click && props.click(props.id);
                }}
              >
                <div>{props.followed ? '팔로잉' : '팔로우'}</div>
              </Button>
            </ButtonBox>
          ) : null}
        </MobileSubLayout>
      </Layout>
    );
  } else {
    return (
      <Layout>
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
  }
};

export default InfoCard;
