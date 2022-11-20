import { useNavigate } from 'react-router-dom';

import useLogin from '../../../hooks/queries/useLogin';
import useSnackbar from '../../../hooks/useSnackbar';
import { useInput } from '../../../hooks/useInput';

import Button from '../../../components/commons/Button';
import Input from '../../../components/commons/Input';

import {Layout, LoginForm, SignUpText, SignUpLink, Linkbox} from './SocialLoginList.styles';


const SocialLoginList = () => {
  const form = {
    ID: useInput(),
    password: useInput(),
  };

  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { mutate } = useLogin({
    onSuccess: () => {
      navigate('/');
    },
    onError: () => {
      Object.values(form).forEach(({ setError, setIsAnimationActive }) => {
        setError(' ');
        setIsAnimationActive(true);
      });
      showSnackbar('아이디와 비밀번호를 확인해주세요');
    },
  });

  const handleSubmitButton = (e: React.FormEvent) => {
    e.preventDefault();
    Object.values(form).forEach(({ setError }) => {
      setError('');
    });
    mutate({ username: form.ID.value, password: form.password.value });
  };

  return (
    <Layout>
      <LoginForm onSubmit={handleSubmitButton}>
        <Input
          pattern='LoginInput'
          status="default"
          placeholder="아이디 또는 이메일"
          {...form.ID}
        />
        <Input
          pattern='LoginInput'
          status="default"
          placeholder="비밀번호"
          {...form.password}
        />
        <Button pattern={'loginSubmit'}>로그인</Button>
        <Linkbox>
          <SignUpText>
            <SignUpLink to={'/lookfor-id'}>아이디 찾기</SignUpLink>
          </SignUpText>
          <SignUpText>
            <SignUpLink to={'/lookfor-pw'}>비밀번호 찾기</SignUpLink>
          </SignUpText>
          <SignUpText>
            <SignUpLink to={'/sign-up'}>회원가입</SignUpLink>
          </SignUpText>
        </Linkbox>
      </LoginForm>
    </Layout>
  );
};

export default SocialLoginList;