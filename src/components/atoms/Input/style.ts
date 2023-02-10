import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > label {
    font-size: 12px;
    font-weight: bold;
    color: ${(props) => props.theme.secondary};
    margin-bottom: 3px;
  }
`;

export const InputContainer = styled.div.attrs(({ disabled }: any) => ({
  disabled: disabled,
}))`
  width: 100%;
  padding: 12px 15px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.card};
  outline: none;
  color: ${(props) => props.theme.tertiary};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "text")};
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 10px;

  > input {
    width: 100%;
    display: flex;
    font-size: 14px;
    background: transparent;
    color: ${(props) => props.theme.tertiary};
    border: none;
    font-weight: 500;
  }
`;
