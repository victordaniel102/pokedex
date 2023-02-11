import styled from "styled-components";

export const NotFoundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    @media (max-width: 480px) {
      width: 80%;
    }
  }
`;

export const NotFoundTitle = styled.h2`
  font-family: "Press Start 2P";
  color: ${(props) => props.theme.onBackground};
  margin-top: 25px;
`;

export const NotFoundDescription = styled.p`
  width: 700px;
  text-align: center;
  line-height: 1.5;
  color: ${(props) => props.theme.tertiary};
  font-family: "Press Start 2P";
  margin-top: 5px;
  margin-bottom: 25px;

  @media (max-width: 700px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    width: 90%;
  }
`;
