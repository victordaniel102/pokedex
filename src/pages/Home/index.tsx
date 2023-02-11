import Image from "../../components/atoms/Image";
import Navbar from "../../components/organisms/Navbar";
import PokemonPokedex from "../../assets/pokemon_pokedex.png";
import Pokeball from "../../assets/pokeball.png";

import { Hero, HomeContainer, PressEnterText } from "./style";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/language";
import { useNavigate } from "react-router-dom";
import pokemonService from "../../services/entities/pokemon.service";
import { setConfigs, addOrUpdatePokemons } from "../../store/reducers/pokemons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dictionary } = useContext(LanguageContext);
  const { next } = useSelector((state: RootState) => state.pokemons);

  useEffect(() => {
    const getPokemonList = async () => {
      if (!next) {
        let data = await pokemonService.getPokemonList();
        dispatch(setConfigs(data));
        dispatch(addOrUpdatePokemons(data.results));

        let response = await Promise.all(
          data.results.map((pokemon) =>
            pokemonService.getPokemonDetail(pokemon.name)
          )
        );

        dispatch(addOrUpdatePokemons(response));
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Enter") navigate("/pokedex");
    };

    const handleTouch = (e: TouchEvent) => {
      navigate("/pokedex");
    };

    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("touchend", handleTouch);

    getPokemonList();
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("touchend", handleTouch);
    };
  }, []);

  return (
    <HomeContainer>
      <Navbar />
      <Hero>
        <Image
          src={PokemonPokedex}
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
