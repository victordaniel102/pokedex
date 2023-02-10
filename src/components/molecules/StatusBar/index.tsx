import ProgressBar from "../../atoms/ProgressBar";
import { StatusBarContainer, StatusBarTitle } from "./style";

interface IStatusBar {
  title?: string;
  percentage: number;
}

const StatusBar = (props: IStatusBar) => {
  return (
    <StatusBarContainer>
      <StatusBarTitle>{props.title}</StatusBarTitle>
      <ProgressBar barColor="#00B929" percentage={props.percentage} />
    </StatusBarContainer>
  );
};

export default StatusBar;
