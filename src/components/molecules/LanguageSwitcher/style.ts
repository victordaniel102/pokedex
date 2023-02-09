import styled from "styled-components";

export const LanguageSwitcherContainer = styled.div`
  padding: 10px 15px;
  background-color: ${(props) => props.theme.card};
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

export const LanguageText = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.onBackground};
`;
