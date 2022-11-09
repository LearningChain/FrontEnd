import ButtonList from './ButtonList';

export default {
  title: 'Layouts/ButtonList',
  component: ButtonList,
};

export const all = () => (
  <>
    <ButtonList
      pattern={'filter'}
      buttonInfos={{
        전체: 'black',
        개발: 'light',
        디자인: 'light',
        기획: 'light',
      }}
      change={() => {}}
      wrap={'scroll'}
    />
  </>
);
