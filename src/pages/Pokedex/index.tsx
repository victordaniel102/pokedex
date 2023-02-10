import { useSelector } from "react-redux";
import PokemonCard from "../../components/molecules/PokemonCard";
import Favorites from "../../components/organisms/Favorites";
import PokedexTemplate from "../../components/templates/Pokedex";
import { RootState } from "../../store";
import { CardsContainer, CardsFooter, CardsHeader } from "./style";
import { useContext, useEffect, useState } from "react";
import pokemonService from "../../services/entities/pokemon.service";
import {
  setConfigs,
  addOrUpdatePokemons,
  addOrUpdatePokemon,
} from "../../store/reducers/pokemons";
import { useDispatch } from "react-redux";
import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import { MagnifyingGlass } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { ToastContext } from "../../context/toast";

const Pokemons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useContext(ToastContext);
  const [search, setSearch] = useState("");
  const { pokemons, next } = useSelector((state: RootState) => state.pokemons);

  const loadMorePokemons = async () => {
    if (next) {
      let data = await pokemonService.getPokemonListByUrl(next);
      dispatch(setConfigs(data));
      dispatch(addOrUpdatePokemons(data.results));

      let response = await Promise.all(
        data.results.map((pokemon) =>
          pokemonService.getPokemonDetailByUrl(pokemon.url!)
        )
      );

      dispatch(addOrUpdatePokemons(response));
    }
  };

  const handleSearch = async (name: string) => {
    if (name) {
      try {
        let pokemon = await pokemonService.getPokemonDetail(name);
        dispatch(addOrUpdatePokemon(pokemon));

        navigate(`/pokemon/${pokemon.id}`);
      } catch (err) {
        toast.notify!({
          msg: "Pokemon não encontrado!",
          options: { type: "error" },
        });
      }
    } else {
      toast.notify!({
        msg: "Campo de pesquisa vazio!",
        options: { type: "error" },
      });
    }
  };

  useEffect(() => {
    const getPokemonList = async () => {
      if (!next) {
        let data = await pokemonService.getPokemonList();
        dispatch(setConfigs(data));
        dispatch(addOrUpdatePokemons(data.results));

        let response = await Promise.all(
          data.results.map((pokemon) =>
            pokemonService.getPokemonDetailByUrl(pokemon.url!)
          )
        );

        dispatch(addOrUpdatePokemons(response));
      }
    };

    getPokemonList();
  }, []);

  return (
    <PokedexTemplate
      side={
        <>
          <Favorites pokemons={[]} />
        </>
      }
    >
      <CardsHeader>
        <Input
          icon={<MagnifyingGlass />}
          placeholder={"Pesquisar"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button text="Pesquisar" onClick={() => handleSearch(search)} colored />
      </CardsHeader>
      <CardsContainer>
        {pokemons.map((pokemon) => (
          <PokemonCard
            id={pokemon.id?.toString()}
            image={pokemon.image}
            name={pokemon.name}
          />
        ))}
      </CardsContainer>
      <CardsFooter>
        {next ? (
          <Button text="Carregar mais" onClick={() => loadMorePokemons()} />
        ) : null}
      </CardsFooter>
    </PokedexTemplate>
  );
};

export default Pokemons;
