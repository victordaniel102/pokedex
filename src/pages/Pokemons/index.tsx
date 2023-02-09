import { useSelector } from "react-redux";
import PokemonCard from "../../components/molecules/PokemonCard";
import Navbar from "../../components/organisms/Navbar";
import { RootState } from "../../store";
import { CardsContainer, PokemonsContainer } from "./style";

const Pokemons = () => {
  const { pokemons } = useSelector((state: RootState) => state.pokemons);
  console.log(pokemons);

  return (
    <PokemonsContainer>
      <Navbar />
      <CardsContainer>
        {pokemons.map((pokemon) => (
          <PokemonCard
            id={pokemon.id.toString()}
            image={pokemon.image}
            name={pokemon.name}
          />
        ))}
      </CardsContainer>
    </PokemonsContainer>
  );
};

export default Pokemons;
