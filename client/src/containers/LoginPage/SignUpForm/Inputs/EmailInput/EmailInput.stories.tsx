import { useState } from 'react';
import { useInput } from '@/hooks/useInput';
import EmailInput from '.';
import { ComponentMeta } from '@storybook/react';
import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient()

export default {
  title: 'Container/SignUpForm/Inputs/EmailInput',
  component: EmailInput,
} as ComponentMeta<typeof EmailInput>;

const Template = () => {
  const { error, setError, setValue, value } = useInput();
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [isSet, setIsSet] = useState(false);
  const [isVerified] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
        <EmailInput
        value={value}
        setValue={setValue}
        error={error}
        setError={setError}
        isAnimationActive={isAnimationActive}
        setIsAnimationActive={setIsAnimationActive}
        isSet={isSet}
        setIsSet={setIsSet}
        isVerified={isVerified}
        />
    </QueryClientProvider>
  );
};

export const EmailInputTemplate = Template.bind({});