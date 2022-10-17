import {Layout} from './Switch.styles';

export interface SwitchProps {
  pattern: string;
  selected: boolean;
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Switch = ({children, ...props}: SwitchProps) => {
  return (
    <Layout {...props}>
      <div>{children}</div>
    </Layout>
  );
};

export default Switch;
