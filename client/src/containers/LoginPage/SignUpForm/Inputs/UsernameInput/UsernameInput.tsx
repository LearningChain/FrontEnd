import React, { Dispatch, SetStateAction, useLayoutEffect } from 'react';

import InputBox from '../InputBox';
import { useInput } from '@/hooks/useInput';

import useUsernameCheck from '@/hooks/queries/useUsernameCheck';
import useSnackbar from '@/hooks/useSnackbar';

import { SIGN_UP_ERROR } from '@/constants/signUp';
import SNACKBAR_MESSAGE from '@/constants/snackbar';
import { isValidUsername } from '@/utils/regExp';

import * as Styled from '../../SignUpForm.styles';

interface UsernameInputProps extends ReturnType<typeof useInput> {
  isAnimationActive: boolean;
  setIsAnimationActive: Dispatch<SetStateAction<boolean>>;
  isSet: boolean;
  setIsSet: Dispatch<SetStateAction<boolean>>;
}

const UsernameInput = ({
  value,
  setValue,
  error,
  setError,
  isAnimationActive,
  setIsAnimationActive,
  isSet,
  setIsSet,
}: UsernameInputProps) => {
  const { showSnackbar } = useSnackbar();
  const { refetch } = useUsernameCheck({
    storeCode: [value],
    options: {
      onSuccess: data => {
        if (data) {
          showSnackbar(SNACKBAR_MESSAGE.SUCCESS_USERNAME_CHECK);
          setIsSet(true);
        }
        if (!data) {
          setError(SIGN_UP_ERROR.DUPLICATED_USERNAME);
          setIsAnimationActive(true);
        }
      },
      onError(error) {
        setError(error.message!);
        setIsAnimationActive(true);
      },
      enabled: false,
    },
  });

  useLayoutEffect(() => {
    if (!value) {
      return;
    }
    setIsSet(false);
    if (!isValidUsername(value)) {
      setError(SIGN_UP_ERROR.INVALID_USERNAME);
    }
    if (isValidUsername(value)) {
      setError('');
    }
  }, [value]);

  const handleIDCheckForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSet) return;
    refetch();
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
      <Styled.Label htmlFor='name'>이름</Styled.Label>
      <Styled.InputForm onSubmit={handleIDCheckForm}>
        <InputBox.Input handleInvalid={() => setError(SIGN_UP_ERROR.BLANK_USERNAME)} placeholder="이름을 입력해주세요" required id='name'/>
        {error ?? <InputBox.ErrorMessage />}
      </Styled.InputForm>
      </Styled.InputFormContainer>
    </InputBox>
  );
};

export default UsernameInput;