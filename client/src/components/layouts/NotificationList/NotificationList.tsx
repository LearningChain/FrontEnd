import NotificationItem, {
  NotificationItemProps,
} from '../../../components/patterns/NotificationItem/NotificationItem';
import {Layout} from './NotificationList.styles';

export interface BadgeProps {
  itemList: NotificationItemProps[];
}

const NotificationList = ({...props}: BadgeProps) => {
  return (
    <Layout>
      {props.itemList.map((itemObj, index) => {
        return (
          <NotificationItem
            title={itemObj.title}
            paragraph={itemObj.paragraph}
            active={itemObj.active}
            date={itemObj.date}
            key={index}
          />
        );
      })}
    </Layout>
  );
};

export default NotificationList;
