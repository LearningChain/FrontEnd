import { useState } from 'react';

import { useInput } from '@/hooks/useInput';

import PasswordConfirmationInput from '.';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Container/SignUpForm/Inputs/PasswordConfirmationInput',
  component: PasswordConfirmationInput,
} as ComponentMeta<typeof PasswordConfirmationInput>;

const Template = () => {
  const { error, setError, setValue, value } = useInput();
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  return (
    <PasswordConfirmationInput
      value={value}
      setValue={setValue}
      error={error}
      setError={setError}
      isAnimationActive={isAnimationActive}
      setIsAnimationActive={setIsAnimationActive}
      password={'test1234!'}
    />
  );
};

export const PasswordConfirmationInputTemplate = Template.bind({});
