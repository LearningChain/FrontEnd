import {Icon, Layout} from './Avatar.styles';
import React from 'react';
import testNoneuser from '../../../imgs/testImgs/user.png';
import testUser from '../../../imgs/testImgs/test.jpg';

export interface AvatarProps {
  /* 버튼 안의 내용 */
  children?: React.ReactNode;
  /* 버튼 유형 결정 */
  pattern: string;
  /* 이미지 사용시 링크 */
  useImg?: string;
  /* icon 사용시 svg */
  icon?: React.ReactNode;
  /* size 사용시 width */
  width?: string;
  /* size 사용시 height */
  height?: string;
}

const Avatar = ({children, ...props}: AvatarProps) => {
  return (
    <Layout {...props}>
      {props.useImg === undefined ? (
        <img src={testNoneuser} />
      ) : (
        <img src={testUser} />
      )}
      {props.pattern !== 'noneIconAvater' ? (
        <Icon pattern={props.pattern}>{props.icon}</Icon>
      ) : null}
    </Layout>
  );
};

Avatar.defaultProps = {
  size: 'medium',
};

export default Avatar;
