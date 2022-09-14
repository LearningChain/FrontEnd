import Header from './Header';

export default {
  title: 'Container/Header',
  component: Header,
};

export const all = () => (
  <>
    <div>모바일</div>
    <Header device={'mobile'} login={false} />
    <br />
    <br />
    <div>데스크탑</div>
    <Header device={'desktop'} login={false} />
    <br />
    <Header device={'desktop'} login={true} />
  </>
);
