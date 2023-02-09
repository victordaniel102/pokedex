import styled from "styled-components";

interface SliderContainerProps {
  on: boolean;
}

export const SwitchContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const SliderContainer = styled.div<SliderContainerProps>`
  width: 35px;
  height: 20px;
  background-color: ${(props) => (props.on ? props.theme.primary : "grey")};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 5px;
  justify-content: ${(props) => (props.on ? "flex-end" : "flex-start")};
  border-radius: 50px;
  transition: 0.2s;
`;

export const Handle = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.theme.onPrimary};
  border-radius: 40px;
`;

export const TextContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`;

export const Title = styled.h5`
  font-size: 14px;
  color: ${(props) => props.theme.primary};
`;

export const Description = styled.p`
  font-size: 10px;
`;
