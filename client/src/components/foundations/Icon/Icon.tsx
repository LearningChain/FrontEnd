import {Svg} from './Icon.styles';
import icons from '../../../_shared/icons/basic';

interface IconProps {
  icon: string;
  block: string;
}

const Icon = ({icon, block, ...props}: IconProps) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      block={block}
      stroke="currentColor"
      {...props}
    >
      {icons[icon]}
    </Svg>
  );
};

Icon.defaultProps = {
  block: false,
};

export default Icon;
