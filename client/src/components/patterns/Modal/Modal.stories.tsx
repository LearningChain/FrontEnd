import Modal, {ModalProps} from './Modal';
import { RecoilRoot } from 'recoil';

export default {
  title: 'Patterns/Modal',
  component: Modal,
};

export const Default = (args: ModalProps) => (
  <RecoilRoot>
    <Modal {...args} />;
  </RecoilRoot>
);

Modal.defaultProps = {
  title: '아티클을 등록했습니다',
  description: '',
  secondary: '내가 쓴 글 보러가기',
  primary: '메인으로 가기',
  theme: 'light',
};
