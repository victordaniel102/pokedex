import styled from "styled-components";

export const PokemonsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin: 25px 0;

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardsFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
