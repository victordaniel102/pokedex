import styled from "styled-components";

export const PokemonDetailsTemplateContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.background};

  .pokeball {
    position: absolute;
    top: -125px;
    left: -85px;
    z-index: 1;

    @media (max-width: 480px) {
      display: none;
    }
  }
`;

export const TemplateContent = styled.div`
  width: 100%;
  display: flex;
  gap: 25px;
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 5%;
  justify-content: center;
  align-items: flex-end;
  background-color: ${(props) => props.theme.background};

  @media (max-width: 480px) {
    height: auto;
  }
`;
