import React, { Dispatch, SetStateAction, useState } from 'react';

import InputBox from '../InputBox';
import { useInput } from '@/hooks/useInput';

import useVerificationCodeCheck from '@/hooks/queries/useVerificationCodeCheck';

import * as Styled from '../../SignUpForm.styles';

interface VerificationCodeInput extends ReturnType<typeof useInput> {
  isAnimationActive: boolean;
  setIsAnimationActive: Dispatch<SetStateAction<boolean>>;
  email: string;
  setIsVerified: Dispatch<SetStateAction<boolean>>;
  isEmailSet: boolean;
  isVerified: boolean;
}

const VerificationCodeInput = ({
  email,
  value,
  setValue,
  error,
  setError,
  isAnimationActive,
  setIsAnimationActive,
  setIsVerified,
  isEmailSet,
  isVerified,
}: VerificationCodeInput) => {
  const [isVisible, setIsVisible] = useState(true);
  const { mutate } = useVerificationCodeCheck({
    onSuccess: () => {
      setIsVerified(true);
    },
    onError(error) {
      setError(error.response?.data.message!);
      setIsAnimationActive(true);
    },
  });

  const handleEmailFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email, code: value });
  };

  const handleVerificationCodeSet = () => {
    if (isVerified && isEmailSet) {
      setIsVisible(false);
    }
  };

  return (
    <>
      {isEmailSet && isVisible && (
        <Styled.VerificationCodeContainer
          isEmailSet={isEmailSet}
          onAnimationEnd={handleVerificationCodeSet}
          isVerified={isVerified}
        >
          <InputBox
            value={value}
            setValue={setValue}
            error={error}
            setError={setError}
            isAnimationActive={isAnimationActive}
            setIsAnimationActive={setIsAnimationActive}
          >
            <Styled.InputForm onSubmit={handleEmailFormSubmit}>
              <InputBox.Input
                handleInvalid={() => {
                  setError('');
                }}
                placeholder="인증번호"
                required
                disabled={isVerified}
              />
              <InputBox.SubmitButton disabled={error !== '' || value === ''}>확인</InputBox.SubmitButton>
            </Styled.InputForm>
            <InputBox.ErrorMessage />
          </InputBox>
        </Styled.VerificationCodeContainer>
      )}
    </>
  );
};

export default VerificationCodeInput;