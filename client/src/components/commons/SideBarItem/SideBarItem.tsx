import {Layout, TitleBox, Title, Content} from './SideBarItem.styles';

export interface SideBarItemProps {
  theme?: string;
  isLoading?: boolean;
  title?: string;
  description?: string;
  pattern?: string;
}

const SideBarItem = ({title, description, isLoading, ...props}: SideBarItemProps) => {
  const text = isLoading ? '' : title;
  const desc = isLoading ? '' : description;
  return (
    <Layout {...props}>
      <TitleBox isLoading={isLoading} {...props}>
        <Title>{text}</Title>
      </TitleBox>
      <Content isLoading={isLoading} {...props}>
        {desc}
      </Content>
    </Layout>
  );
};

SideBarItem.defaultProps = {
  theme: 'light',
  isLoading: false,
};

export default SideBarItem;
