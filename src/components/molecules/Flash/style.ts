import styled from "styled-components";

export const FlashContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlashTitle = styled.h3`
  color: ${(props) => props.theme.onBackground};
  font-size: 18px;
  margin-top: 10px;

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

export const FlashDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.tertiary};
  text-align: center;
  margin-top: 5px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
