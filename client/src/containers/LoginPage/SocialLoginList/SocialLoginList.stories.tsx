import { withRouter } from 'storybook-addon-react-router-v6';

import SocialLoginList from './SocialLoginList';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient()

export default {
  title: 'Container/SocialLoginList',
  component: SocialLoginList,
  decorators: [withRouter],
} as ComponentMeta<typeof SocialLoginList>;


const Template = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SocialLoginList />;
    </QueryClientProvider>
  )
}

export const SocialLoginListTemplate: ComponentStory<typeof SocialLoginList> = Template.bind({});
SocialLoginListTemplate.args = {};