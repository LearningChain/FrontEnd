import { withRouter } from 'storybook-addon-react-router-v6';

import SignInForm from './SignInForm';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient()

export default {
  title: 'Container/SignInForm',
  component: SignInForm,
  decorators: [withRouter],
} as ComponentMeta<typeof SignInForm>;


const Template = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SignInForm />;
    </QueryClientProvider>
  )
}

export const SignInFormTemplate: ComponentStory<typeof SignInForm> = Template.bind({});
SignInFormTemplate.args = {};