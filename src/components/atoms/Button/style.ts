import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-weight: bold;
  border: none;
  padding: 10px 15px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.onBackground};
  font-size: 16px;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.card};
  }
`;
