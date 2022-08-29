import ButtonList from './ButtonList';

export default {
  title: 'Layouts/ButtonList',
  component: ButtonList,
};

export const all = () => (
  <>
    <ButtonList
      pattern={'filter'}
      bright={'light'}
      childrenArr={['전체', '개발', '디자인', '기획']}
    />
  </>
);
