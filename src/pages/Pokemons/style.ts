import styled from "styled-components";

export const PokemonsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;
