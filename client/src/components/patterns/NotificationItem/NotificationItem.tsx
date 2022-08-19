import React from 'react';
import {DateTime, Layout, Paragraph, Title} from './NotificationItem.styles';

export interface BadgeProps {
  title: string;
  paragraph: string;
  active: boolean;
  date: Date;
}

const NotificationItem = ({...props}: BadgeProps) => {
  return (
    <Layout active={props.active}>
      <Title>{props.title}</Title>
      <Paragraph>{props.paragraph}</Paragraph>
      <DateTime>{setDateLatest(props.date)}</DateTime>
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
