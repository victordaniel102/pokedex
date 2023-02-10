import styled from "styled-components";

interface ContainerProps {
  size: string;
}

export const LogoContainer = styled.img<ContainerProps>`
  width: ${(props) => props.size};
`;
