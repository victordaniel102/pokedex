import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar, { NavbarItem } from "../../organisms/Navbar";
import Image from "../../atoms/Image";
import {
  Content,
  PokemonDetailsTemplateContainer,
  TemplateContent,
} from "./style";
import Pokeball from "../../../assets/pokeball.png";

interface IPokemonDetailsTemplate {
  children: React.ReactNode;
}

const PokemonDetailsTemplate = (props: IPokemonDetailsTemplate) => {
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
    <PokemonDetailsTemplateContainer>
      <Navbar items={navbarItems} />
      <TemplateContent>
        <Content>{props.children}</Content>
      </TemplateContent>
      <Image className="pokeball" src={Pokeball} size="400px" />
    </PokemonDetailsTemplateContainer>
  );
};
export default PokemonDetailsTemplate;
