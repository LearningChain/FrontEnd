import { useMutation, UseMutationOptions } from 'react-query';

import axios, { AxiosError, AxiosResponse } from 'axios';

interface SignUpProps {
  email: string | null;
  password: string;
  username: string;
  code: string | null;
  passwordConfirmation: string;
  favoriteCategory: string;
}

const useSignUp = (
  options?: UseMutationOptions<AxiosResponse<string, string>, AxiosError<{ message: string }>, SignUpProps>,
) => {
  return useMutation(
    ({ email, username, code, password, passwordConfirmation, favoriteCategory}): Promise<AxiosResponse<string, string>> =>
      axios.post('/members/signup', {
        email,
        username,
        code,
        password,
        passwordConfirmation,
        favoriteCategory,
      }),
    {
      ...options,
    },
  );
};

export default useSignUp;