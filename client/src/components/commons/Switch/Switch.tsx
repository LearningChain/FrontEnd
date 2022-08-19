import {Layout} from './Switch.styles';

export interface SwitchProps {
  pattern: string;
  selected: boolean;
  children: React.ReactNode;
}

const Switch = ({children, ...props}: SwitchProps) => {
  return (
    <Layout {...props}>
      {children}
    </Layout>
  );
};

export default Switch;
