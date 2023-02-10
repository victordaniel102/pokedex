import styled from "styled-components";

interface IButton {
  colored?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

export const ButtonContainer = styled.button<IButton>`
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  background-color: ${(props) =>
    props.colored
      ? props.backgroundColor
        ? props.backgroundColor
        : props.theme.primary
      : props.theme.background};
  color: ${(props) =>
    props.textColor
      ? props.textColor
      : props.colored
      ? props.theme.onPrimary
      : props.theme.onBackground};
  font-size: 16px;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    background-color: ${(props) =>
      props.colored ? props.theme.primary + "CF" : props.theme.card};
  }
`;
