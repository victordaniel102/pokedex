import Image from "../../components/atoms/Image";
import Navbar from "../../components/organisms/Navbar";
import PokemonPokedex from "../../assets/pokemon_pokedex.png";
import Pokeball from "../../assets/pokeball.png";

import { Hero, HomeContainer, PressEnterText } from "./style";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/language";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { dictionary } = useContext(LanguageContext);

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Enter") navigate("/pokemons");
    };
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <HomeContainer>
      <Navbar />
      <Hero>
        <Image
          src={PokemonPokedex}
          size="500px"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            bounce: 0.25,
            damping: 20,
          }}
        />
      </Hero>
      <Image className="pokeball" src={Pokeball} size="400px" />
      <PressEnterText>{dictionary?.home.start}</PressEnterText>
    </HomeContainer>
  );
};

export default Home;
