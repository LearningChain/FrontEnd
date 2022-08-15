import Badge from './Badge';

export default {
  title: 'Commons/Badge',
  component: Badge,
};

export const all = () => (
  <>
    <div>RadiusRectangleLight</div>
    <br />
    <Badge pattern={'radiusRectangle'} theme={'light'}>
      개발
    </Badge>
    <br />
    <br />
    <div>RadiusRectangleDark</div>
    <br />
    <Badge pattern={'radiusRectangle'} theme={'dark'}>
      디자인
    </Badge>
    <br />
  </>
);
