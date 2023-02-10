import styled from "styled-components";

interface IButton {
  colored: boolean;
}

export const ButtonContainer = styled.button<IButton>`
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  background-color: ${(props) =>
    props.colored ? props.theme.primary : props.theme.background};
  color: ${(props) =>
    props.colored ? props.theme.onPrimary : props.theme.onBackground};
  font-size: 16px;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    background-color: ${(props) =>
      props.colored ? props.theme.primary + "CF" : props.theme.card};
  }
`;
