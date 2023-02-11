import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  justify-content: space-between;

  position: absolute;
  z-index: 2;
  top: 0;

  @media (max-width: 480px) {
    padding: 25px;
  }
`;

export const NavbarMenu = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const NavbarLogo = styled.div``;
