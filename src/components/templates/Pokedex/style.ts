import styled from "styled-components";

export const PokedexTemplateContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  background-color: ${(props) => props.theme.background};
  min-height: 100vh;
`;

export const TemplateContent = styled.div`
  width: 100%;
  display: flex;
  padding: 50px;

  @media (min-width: 1920px) {
    width: 70%;
  }
`;

export const Side = styled.div`
  flex: 4;
`;

export const Content = styled.div`
  flex: 10;
`;
