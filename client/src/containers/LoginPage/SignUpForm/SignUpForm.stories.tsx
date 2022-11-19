import { withRouter } from 'storybook-addon-react-router-v6';

import SignUpForm from './SignUpForm';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient()

export default {
  title: 'Container/SignUpForm',
  component: SignUpForm,
  decorators: [withRouter],
} as ComponentMeta<typeof SignUpForm>;

const Template = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SignUpForm />
    </QueryClientProvider>
  )
}

export const SignUpFormTemplate: ComponentStory<typeof SignUpForm> = Template.bind({});
SignUpFormTemplate.args = {};