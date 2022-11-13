import { useState } from 'react';

import { useInput } from '@/hooks/useInput';

import FaviriteCategoryInput from '.';
import { ComponentMeta } from '@storybook/react';

import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient()

export default {
  title: 'Container/SignUpForm/Inputs/FaviriteCategoryInput',
  component: FaviriteCategoryInput,
} as ComponentMeta<typeof FaviriteCategoryInput>;

const Template = () => {
  const { error, setError, setValue, value } = useInput();
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [isSet, setIsSet] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
        <FaviriteCategoryInput
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

export const FaviriteCategoryInputTemplate = Template.bind({});