import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .pokeball {
    position: absolute;
    top: -125px;
    left: -85px;
  }
`;

export const Hero = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PressEnterText = styled.p`
  color: ${(props) => props.theme.onBackground};
  font-family: "Press Start 2P", sans-serif;
  margin-bottom: 50px;
  user-select: none;

  animation-name: blink;
  -webkit-animation-name: blink;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1, 0, 0, 1);
  -webkit-animation-timing-function: cubic-bezier(1, 0, 0, 1);
  animation-duration: 1s;
  -webkit-animation-duration: 1s;

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;
