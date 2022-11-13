import { useState } from 'react';

import { useInput } from '@/hooks/useInput';

import UsernameInput from '.';
import { ComponentMeta } from '@storybook/react';

import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient()

export default {
  title: 'Container/SignUpForm/Inputs/UsernameInput',
  component: UsernameInput,
} as ComponentMeta<typeof UsernameInput>;

const Template = () => {
  const { error, setError, setValue, value } = useInput();
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [isSet, setIsSet] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
        <UsernameInput
        value={value}
        setValue={setValue}
        error={error}
        setError={setError}
        isAnimationActive={isAnimationActive}
        setIsAnimationActive={setIsAnimationActive}
        isSet={isSet}
        setIsSet={setIsSet}
        />
    </QueryClientProvider>
  );
};

export const UsernameInputTemplate = Template.bind({});