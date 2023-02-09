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
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-top: 5px;
  gap: 5px;

  text-transform: capitalize;
`;

export const PokemonTag = styled.p`
  color: ${(props) => props.theme.tertiary};
`;
