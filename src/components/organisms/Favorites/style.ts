import styled from "styled-components";

export const FavoritesContainer = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.card};
  border-radius: 10px;
  gap: 10px;
`;
