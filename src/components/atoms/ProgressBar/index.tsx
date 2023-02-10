import { Bar, ProgressBarContainer } from "./style";

interface IProgressBar {
  barColor?: string;
  percentage: number;
}

const ProgressBar = (props: IProgressBar) => {
  return (
    <ProgressBarContainer>
      <Bar barColor={props.barColor} percentage={props.percentage} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
