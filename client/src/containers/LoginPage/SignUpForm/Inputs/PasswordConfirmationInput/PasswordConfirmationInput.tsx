import { Dispatch, SetStateAction, useLayoutEffect } from 'react';

import InputBox from '../InputBox';
import { useInput } from '@/hooks/useInput';

import { SIGN_UP_ERROR } from '@/constants/signUp';

import * as Styled from '../../SignUpForm.styles';

interface PasswordConfirmationInputProps extends ReturnType<typeof useInput> {
  isAnimationActive: boolean;
  setIsAnimationActive: Dispatch<SetStateAction<boolean>>;
  password: string;
}

const PasswordConfirmationInput = ({
  value,
  setValue,
  error,
  setError,
  isAnimationActive,
  setIsAnimationActive,
  password,
}: PasswordConfirmationInputProps) => {
  useLayoutEffect(() => {
    if (!value) return;
    if (value !== password) {
      return setError(SIGN_UP_ERROR.INVALID_PASSWORD_CONFIRMATION);
    }

    if (value === password) {
      return setError('');
    }
  }, [value]);

  return (
    <InputBox
      value={value}
      setValue={setValue}
      error={error}
      setError={setError}
      isAnimationActive={isAnimationActive}
      setIsAnimationActive={setIsAnimationActive}
    >
      <Styled.InputFormContainer>
      <Styled.Label htmlFor='PasswordConfirm'>비밀번호 확인</Styled.Label>
      <Styled.PasswordInputContainer>
        <InputBox.Input
          id="PasswordConfirm"
          type="password"
          handleInvalid={() => {
            setError(SIGN_UP_ERROR.BLANK_PASSWORD);
          }}
          placeholder="8~30자리 영문, 숫자, 특수문자 조합"
          required
        />
        <div />
        <InputBox.ErrorMessage />
      </Styled.PasswordInputContainer>
      </Styled.InputFormContainer>
    </InputBox>
  );
};

export default PasswordConfirmationInput;
