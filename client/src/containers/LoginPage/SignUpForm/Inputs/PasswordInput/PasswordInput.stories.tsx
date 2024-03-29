import { useState } from 'react';

import { useInput } from '@/hooks/useInput';

import PasswordInput from '.';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Container/SignUpForm/Inputs/PasswordInput',
  component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template = () => {
  const { error, setError, setValue, value } = useInput();
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  return (
    <PasswordInput
      value={value}
      setValue={setValue}
      error={error}
      setError={setError}
      isAnimationActive={isAnimationActive}
      setIsAnimationActive={setIsAnimationActive}
    />
  );
};

export const PasswordInputTemplate = Template.bind({});