import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar, { NavbarItem } from "../../organisms/Navbar";
import Image from "../../atoms/Image";
import {
  Content,
  PokedexTemplateContainer,
  Side,
  TemplateContent,
} from "./style";
import Pokeball from "../../../assets/pokeball.png";

interface IPokedexTemplate {
  side?: React.ReactNode;
  children: React.ReactNode;
}

const PokedexTemplate = (props: IPokedexTemplate) => {
  const navigate = useNavigate();

  const navbarItems: NavbarItem[] = [
    {
      text: "Home",
      onClick: () => navigate("/"),
    },
    {
      text: "Pokedex",
      onClick: () => navigate("/pokedex"),
    },
  ];

  return (
    <PokedexTemplateContainer>
      <Navbar items={navbarItems} />
      <TemplateContent>
        <Side>{props.side}</Side>
        <Content>{props.children}</Content>
      </TemplateContent>
      <Image className="pokeball" src={Pokeball} size="400px" />
    </PokedexTemplateContainer>
  );
};
export default PokedexTemplate;
