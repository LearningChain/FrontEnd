import Avatar from '../../../components/commons/Avatar';
import Icon from '../../../components/foundations/Icon/Icon';
import React from 'react';
import {DateTime, Layout, Paragraph, TextBox} from './NotificationItem.styles';

export interface NotificationItemProps {
  user: string;
  paragraph: string;
  active: boolean;
  date: Date;
}

const NotificationItem = ({...props}: NotificationItemProps) => {
  return (
    <Layout active={props.active}>
      <Avatar
        pattern={'rightIconAvater'}
        icon={
          <Icon
            icon="redDot"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            stroke=""
          />
        }
      />
      <TextBox>
        <Paragraph>{props.paragraph}</Paragraph>
        <DateTime>{setDateLatest(props.date)}</DateTime>
      </TextBox>
    </Layout>
  );
};

export const setDateLatest = (dateData: Date) => {
  const nowTime = new Date();
  const writeTime = new Date(dateData);
  const timeDiff = (nowTime.getTime() - writeTime.getTime()) / 60000;
  let newDate = null;
  if (
    nowTime.getFullYear() === writeTime.getFullYear() &&
    nowTime.getMonth() === writeTime.getMonth() &&
    nowTime.getDate() === writeTime.getDate()
  ) {
    const hour = writeTime.getHours();
    const minutes =
      String(writeTime.getMinutes()).length === 1
        ? `0${String(writeTime.getMinutes())}`
        : writeTime.getMinutes();
    newDate = `오늘, ${hour}:${minutes}`;
  } else {
    newDate = `${Math.floor(timeDiff / 1440) + 1}일전`;
  }
  return newDate;
};

export default NotificationItem;
