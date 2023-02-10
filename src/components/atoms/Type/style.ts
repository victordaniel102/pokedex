import styled from "styled-components";

interface ContainerProps {
  color: string;
}

export const TypeContainer = styled.div<ContainerProps>`
  padding: 3px 7px;
  border-radius: 100px;
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.background};
  font-weight: 500;
  font-size: 14px;
  text-transform: capitalize;
`;
