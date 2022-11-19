import { Dispatch, SetStateAction } from 'react';

import InputBox from '../InputBox';
import { useInput } from '@/hooks/useInput';

import { MEMBER, SIGN_UP_ERROR } from '@/constants/signUp';
import { isValidPassword } from '@/utils/regExp';

import * as Styled from '../../SignUpForm.styles';

interface PasswordInputProps extends ReturnType<typeof useInput> {
  isAnimationActive: boolean;
  setIsAnimationActive: Dispatch<SetStateAction<boolean>>;
}

const PasswordInput = ({
  value,
  setValue,
  error,
  setError,
  isAnimationActive,
  setIsAnimationActive,
}: PasswordInputProps) => {
  const handleBlur = () => {
    if (!isValidPassword(value)) {
      setError(SIGN_UP_ERROR.INVALID_PASSWORD);
    }
  };
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
      <Styled.Label htmlFor='password'>비밀번호</Styled.Label>
      <Styled.PasswordInputContainer>
        <InputBox.Input
          id='password'
          type="password"
          handleInvalid={() => {
            setError(SIGN_UP_ERROR.BLANK_PASSWORD);
          }}
          placeholder="8~30자리 영문, 숫자, 특수문자 조합"
          onBlur={handleBlur}
          required
        />
        <div />
        {error && <InputBox.ErrorMessage />}
      </Styled.PasswordInputContainer>
      </Styled.InputFormContainer>
    </InputBox>
  );
};

export default PasswordInput;