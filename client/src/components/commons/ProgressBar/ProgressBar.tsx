import {Layout, Label, Bar, Background, Progress} from './ProgressBar.styles';

export interface ProgressProps {
    name: string;
    level: string;
    percent: string;
}


const ProgressBar = ({name, level, percent} : ProgressProps) => {
  return (
    <Layout>
      <Label>
        <p>{name}</p>
        <p>{level}</p>
      </Label>
      <Bar>
        <Background />
        <Progress percent={percent} />
      </Bar>
    </Layout>
  );
};

export default ProgressBar;
