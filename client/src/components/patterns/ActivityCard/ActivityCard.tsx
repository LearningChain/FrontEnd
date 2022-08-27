import {Layout, Count, Title, ActivityCardItem} from './ActivityCard.styles';
import React from 'react';

export interface ActivityCardItemProps {
  count?: number;
  title?: string;
}

export interface ActivityCardProps {
  theme?: string;
  itemList: ActivityCardItemProps[];
}


const ActivityCard = ({theme, ...props}: ActivityCardProps) => {
  return (
    <Layout theme={theme} {...props}>
      {props.itemList.map((itemObj, index) => {
        return (
          <ActivityCardItem key={index}>
            <Count key={index} theme={theme}>{itemObj.count}</Count>
            <Title key={index} theme={theme}>{itemObj.title}</Title>
          </ActivityCardItem>
        );
      })}

    </Layout>
  );
};

export default ActivityCard;
