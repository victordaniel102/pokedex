import styled from "styled-components";

export const PokemonCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.card};
  border-radius: 10px;
  gap: 5px;
  cursor: pointer;

  :hover {
    transition: 0.3s;
    background-color: ${(props) => props.theme.card + "FF"};
  }
`;

export const PokemonName = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.onBackground};
  text-transform: capitalize;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-top: 5px;
  gap: 5px;

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const PokemonTag = styled.span`
  color: ${(props) => props.theme.tertiary};
`;

export const PokemonImage = styled.div`
  padding: 10px 0;

  @media (max-width: 480px) {
    padding: 0;
  }

  img {
    @media (max-width: 480px) {
      width: 150px;
    }
  }
`;
