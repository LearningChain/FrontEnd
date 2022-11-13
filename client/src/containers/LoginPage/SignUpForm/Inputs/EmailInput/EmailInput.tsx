import React, { Dispatch, SetStateAction, useLayoutEffect } from 'react';

import InputBox from '../InputBox';
import { useInput } from '@/hooks/useInput';

import useEmailCheck from '@/hooks/queries/useEmailCheck';

import { SIGN_UP_ERROR } from '@/constants/signUp';
import { isValidEmail } from '@/utils/regExp';

import * as Styled from '../../SignUpForm.styles';

interface EmailInputProps extends ReturnType<typeof useInput> {
  isAnimationActive: boolean;
  setIsAnimationActive: Dispatch<SetStateAction<boolean>>;
  isSet: boolean;
  setIsSet: Dispatch<SetStateAction<boolean>>;
  isVerified: boolean;
}

const EmailInput = ({
  value,
  setValue,
  error,
  setError,
  isAnimationActive,
  setIsAnimationActive,
  isSet,
  setIsSet,
  isVerified,
}: EmailInputProps) => {
  const { isLoading, mutate } = useEmailCheck({
    onSuccess: () => {
      setIsSet(true);
    },
    onError(error) {
      setError(error.response?.data.message!);
      setIsAnimationActive(true);
    },
  });

  useLayoutEffect(() => {
    setIsAnimationActive(false);
    if (!value) {
      return;
    }
    if (!isValidEmail(value)) {
      setError(SIGN_UP_ERROR.INVALID_EMAIL);
    }
    if (isValidEmail(value)) {
      setError('');
    }
  }, [value]);

  const handleEmailFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email: value });
  };

  const handleKeyDown = () => {};
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
      <Styled.Label htmlFor='eamil'>아이디 (이메일)</Styled.Label>
      <Styled.InputForm onSubmit={handleEmailFormSubmit}>
        <InputBox.Input
          id='email'
          handleInvalid={() => {
            setError(SIGN_UP_ERROR.INVALID_EMAIL);
          }}
          type="email"
          placeholder=" 아이디 or 이메일을 입력해주세요"
          onKeyDown={handleKeyDown}
          disabled={isVerified || isSet}
          required
        />
        {isLoading ? (
          <InputBox.SubmitButton disabled={true}>로딩중</InputBox.SubmitButton>
        ) : (
          <InputBox.SubmitButton disabled={error !== '' || value === '' || isSet}>
            {isSet ? (
              isVerified ? (
                '인증 완료'
              ) : (
                <Styled.Timer startMinute={5} callback={() => setIsSet(false)} />
              )
            ) : (
              '인증번호 받기'
            )}
          </InputBox.SubmitButton>
        )}
      </Styled.InputForm>
      <InputBox.ErrorMessage />
      </Styled.InputFormContainer>
    </InputBox>
  );
};

export default EmailInput;