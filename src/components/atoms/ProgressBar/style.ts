import styled from "styled-components";

interface IBar {
  barColor?: string;
  percentage: number;
}

export const ProgressBarContainer = styled.div`
  width: 100%;
  padding: 5px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.card};
`;

export const Bar = styled.div<IBar>`
  height: 10px;
  width: ${(props) => `${props.percentage}%`};
  background-color: ${(props) => (props.barColor ? props.barColor : "blue")};
  padding: 5px;
  border-radius: 100px;
`;
