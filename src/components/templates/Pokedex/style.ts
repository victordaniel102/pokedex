import styled from "styled-components";

export const PokedexTemplateContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  background-color: ${(props) => props.theme.background};
  min-height: 100vh;

  .pokeball {
    position: absolute;
    top: -125px;
    left: -85px;
    z-index: 0;
  }
`;

export const TemplateContent = styled.div`
  width: 100%;
  display: flex;
  padding: 50px;
  gap: 25px;

  @media (min-width: 1920px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 25px;
  }
`;

export const Side = styled.div`
  flex: 4;
`;

export const Content = styled.div`
  flex: 10;
`;
