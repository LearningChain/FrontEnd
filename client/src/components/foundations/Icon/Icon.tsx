import {Svg} from './Icon.styles';
import icons from '../../../_shared/icons/basic';

interface IconProps {
  icon: string;
  block: string;
  stroke?: string;
  width?: string;
  height?: string;
  viewBox?: string;
}

const Icon = ({icon, block, ...props}: IconProps) => {
  return (
    <Svg
      viewBox={props.viewBox === undefined ? '0 0 30 30' : props.viewBox}
      width={props.width === undefined ? '30' : props.width}
      height={props.height === undefined ? '30' : props.height}
      stroke={props.stroke === undefined ? 'black' : props.stroke}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      block={block}
    >
      {icons[icon]}
    </Svg>
  );
};

Icon.defaultProps = {
  block: false,
};

export default Icon;
