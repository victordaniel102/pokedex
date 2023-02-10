import styled from "styled-components";

interface IBar {
  barColor?: string;
  percentage: number;
}

export const StatusBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StatusBarTitle = styled.p`
  font-weight: bold;
  margin-bottom: 2px;
  margin-left: 5px;
  color: ${(props) => props.theme.onBackground};
  text-transform: capitalize;
  font-size: 14px;
`;
