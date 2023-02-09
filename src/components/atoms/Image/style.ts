import styled, { CSSProperties } from "styled-components";

interface ContainerProps {
  size: string;
  style?: CSSProperties;
}

export const ImageContainer = styled.img<ContainerProps>`
  width: ${(props) => props.size};
`;
