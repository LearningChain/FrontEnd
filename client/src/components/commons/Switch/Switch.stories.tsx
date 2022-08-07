import Switch from './Switch';

export default {
  title: 'Commons/Switch',
  component: Switch,
};

export const all = () => (
  <>
    <div>mobileHome</div>
    <Switch pattern={'mobileHome'} selected={true}>
      콘텐츠
    </Switch>
    <br />
    <Switch pattern={'mobileHome'} selected={false}>
      스터디
    </Switch>
    <br />
    <div>mobileContent</div>
    <Switch pattern={'mobileContent'} selected={true}>
      개발
    </Switch>
    <br />
    <Switch pattern={'mobileContent'} selected={false}>
      디자인
    </Switch>
    <br />
    <div>desktopContent</div>
    <Switch pattern={'desktopContent'} selected={true}>
      개발
    </Switch>
    <br />
    <Switch pattern={'desktopContent'} selected={false}>
      디자인
    </Switch>
    <br />
  </>
);
