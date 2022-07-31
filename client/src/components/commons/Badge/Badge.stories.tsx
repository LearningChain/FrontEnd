import Badge from './Badge';

export default {
  title: 'Common/Badge',
  component: Badge,
};

export const all = () => (
  <>
    <div>RadiusRectangleLight</div>
    <br />
    <Badge pattern={'radiusRectangle'} theme={'light'} size={'middle'}>
      개발
    </Badge>
    <br />
    <br />
    <div>RadiusRectangleDark</div>
    <br />
    <Badge pattern={'radiusRectangle'} theme={'dark'} size={'long'}>
      디자인
    </Badge>
    <br />
  </>
);
