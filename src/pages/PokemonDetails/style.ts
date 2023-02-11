import styled from "styled-components";

export const PokemonDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const PokemonDetailsContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 480px) {
    flex-direction: column;
    margin-top: 100px;
  }
`;

export const PokemonInfoContainer = styled.div`
  flex: 10;
  display: flex;
  align-items: flex-end;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

export const PokemonDetailsFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const PokemonImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    z-index: 1;
  }
`;

export const PokemonShadow = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.tertiary + "2F"};
  height: 50px;
  border-radius: 100%;
  margin-top: -40px;
  z-index: 0;
`;

export const PokemonInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 480px) {
    margin-top: 25px;
    margin-bottom: 15px;
  }
`;

export const PokemonTag = styled.span`
  color: ${(props) => props.theme.tertiary};
  font-weight: bold;
`;

export const PokemonName = styled.h2`
  font-size: 32px;
  color: ${(props) => props.theme.onBackground};
  text-transform: capitalize;
`;

export const PokemonDescription = styled.p`
  color: ${(props) => props.theme.tertiary};
`;

export const PokemonStats = styled.div`
  flex: 5;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const PokemonStatsContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 7px;

  @media (max-width: 480px) {
    margin-top: 25px;
    width: 100%;
  }
`;

export const PokemonTypes = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5px;
  gap: 5px;
`;
