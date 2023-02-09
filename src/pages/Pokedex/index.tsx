import { useSelector } from "react-redux";
import PokemonCard from "../../components/molecules/PokemonCard";
import PokedexTemplate from "../../components/templates/Pokedex";
import { RootState } from "../../store";
import { CardsContainer } from "./style";

const Pokemons = () => {
  const { pokemons } = useSelector((state: RootState) => state.pokemons);

  return (
    <PokedexTemplate>
      <CardsContainer>
        {pokemons.map((pokemon) => (
          <PokemonCard
            id={pokemon.id.toString()}
            image={pokemon.image}
            name={pokemon.name}
          />
        ))}
      </CardsContainer>
    </PokedexTemplate>
  );
};

export default Pokemons;
