import * as Styled from './ErrorMessage.styles';

import { useInputContext } from '@/hooks/useInputContext';

const ErrorMessage = () => {
  const { error } = useInputContext();
  return <Styled.MessageContainer>{error ? <Styled.Message>{error}</Styled.Message> : null}</Styled.MessageContainer>;
};

export default ErrorMessage;