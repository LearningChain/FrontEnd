import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import EmailInput from './Inputs/EmailInput';
import UsernameInput from './Inputs/UsernameInput';
import PasswordConfirmationInput from './Inputs/PasswordConfirmationInput';
import PasswordInput from './Inputs/PasswordInput';
import VerificationCodeInput from './Inputs/VerificationCodeInput';
import FaviriteCategoryInput from './Inputs/FaviriteCategoryInput';

import { useInput } from '@/hooks/useInput';

import useSignUp from '@/hooks/queries/useSignUp';
import useSnackbar from '@/hooks/useSnackbar';

import { Layout, Heading, SignUpFormLayout, SubmitButton} from './SignUpForm.styles';

import PATH from '@/constants/path';
import SNACKBAR_MESSAGE from '@/constants/snackbar';

const SignUpForm = () => {
  const form = {
    email: useInput(),
    verificationCode: useInput(),
    username: useInput(),
    password: useInput(),
    passwordConfirmation: useInput(),
    favoriteCategory: useInput(),
  };

  const [isEmailSet, setIsEmailSet] = useState(false);
  const [isVerificationCodeSet, setIsVerificationCodeSet] = useState(false);
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const [isFavoriteCategorySet, setIsFavoriteCategorySet] = useState(false);

  const { showSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const { mutate } = useSignUp({
    onSuccess: () => {
      showSnackbar(SNACKBAR_MESSAGE.SUCCESS_SIGN_UP);
      navigate(PATH.LOGIN);
    },
    onError: error => {
      Object.values(form).forEach(item => {
        item.setIsAnimationActive(true);
      });

      showSnackbar(error.response?.data.message!);
    },
  });

  const handleSubmitButton = (e: React.FormEvent) => {
    e.preventDefault();
    form.email.setError('');
    form.password.setError('');

    mutate({
      password: form.password.value,
      code: form.verificationCode.value,
      email: form.email.value,
      username: form.username.value,
      passwordConfirmation: form.passwordConfirmation.value,
      favoriteCategory: form.favoriteCategory.value,
    });
  };

  return (
    <Layout>
      <SignUpFormLayout>
        <Heading>러닝체인과 함께 <br />시작해 보세요!</Heading>
        <EmailInput
            {...form.email}
            isSet={isEmailSet}
            setIsSet={setIsEmailSet}
            isVerified={isVerificationCodeSet}
          />
          <VerificationCodeInput
            {...form.verificationCode}
            email={form.email.value}
            setIsVerified={setIsVerificationCodeSet}
            isEmailSet={isEmailSet}
            isVerified={isVerificationCodeSet}
          />
        <PasswordInput {...form.password} />
        <PasswordConfirmationInput {...form.passwordConfirmation} password={form.password.value} />
        <UsernameInput {...form.username} isSet={isUsernameSet} setIsSet={setIsUsernameSet} />
        <FaviriteCategoryInput {...form.favoriteCategory} isSet={isFavoriteCategorySet} setIsSet={setIsFavoriteCategorySet}></FaviriteCategoryInput>
        <SubmitButton
          onClick={handleSubmitButton}
          disabled={!isEmailSet || !isUsernameSet}
        >
          확인
        </SubmitButton>

      </SignUpFormLayout>
    </Layout>
  );
};

export default SignUpForm;