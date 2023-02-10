import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store";
import { Pokemon } from "../../types/pokemon";
import {
  PokemonDescription,
  PokemonDetailsContainer,
  PokemonDetailsContent,
  PokemonDetailsFooter,
  PokemonImage,
  PokemonInfo,
  PokemonName,
  PokemonShadow,
  PokemonStats,
  PokemonStatsContent,
  PokemonTag,
  PokemonTypes,
} from "./style";
import Image from "../../components/atoms/Image";
import PokemonDetailsTemplate from "../../components/templates/PokemonDetails";
import pokemonService from "../../services/entities/pokemon.service";
import {
  addOrUpdatePokemon,
  updatePokemonDescription,
} from "../../store/reducers/pokemons";
import { useDispatch } from "react-redux";
import Type from "../../components/atoms/Type";
import Button from "../../components/atoms/Button";
import ProgressBar from "../../components/atoms/ProgressBar";
import StatusBar from "../../components/molecules/StatusBar";

const PokemonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon>();
  const { pokemons } = useSelector((state: RootState) => state.pokemons);

  const search = async (id: string) => {
    if (id) {
      try {
        let pokemon = await pokemonService.getPokemonDetail(id);

        dispatch(addOrUpdatePokemon(pokemon));
      } catch (err) {
        //
      }
    } else {
      //
    }
  };

  useEffect(() => {
    if (id) {
      let pokemon = pokemons.find((pokemon) => pokemon.id === parseInt(id));

      if (pokemon) {
        setCurrentPokemon(pokemon);
      } else {
        search(id);
      }
    }
  }, [id, pokemons]);

  return (
    <PokemonDetailsTemplate>
      <PokemonDetailsContainer>
        <PokemonDetailsContent>
          <PokemonInfo>
            <PokemonTag>#{currentPokemon?.id}</PokemonTag>
            <PokemonName>{currentPokemon?.name}</PokemonName>
            <PokemonDescription>
              {currentPokemon?.description}
            </PokemonDescription>
            <PokemonTypes>
              {currentPokemon &&
                currentPokemon?.types!.map((type) => <Type type={type.name} />)}
            </PokemonTypes>
          </PokemonInfo>
          <PokemonImage>
            <Image src={currentPokemon?.image!} size="300px" />
            <PokemonShadow />
          </PokemonImage>
          <PokemonStats>
            <PokemonStatsContent>
              {currentPokemon?.stats?.map((stat) => (
                <StatusBar
                  percentage={(parseInt(stat.base) / 200) * 100}
                  title={`${stat.name.split("-").join(" ")}: ${stat.base}`}
                />
              ))}
            </PokemonStatsContent>
          </PokemonStats>
        </PokemonDetailsContent>
        <PokemonDetailsFooter>
          <Button
            text="Anterior"
            onClick={() => navigate(`/pokemon/${currentPokemon?.id! - 1}`)}
            textColor="#262626"
            backgroundColor="#FFF"
            colored
          />
          <Button
            text="Próximo"
            onClick={() => navigate(`/pokemon/${currentPokemon?.id! + 1}`)}
            textColor="#262626"
            backgroundColor="#FFF"
            colored
          />
        </PokemonDetailsFooter>
      </PokemonDetailsContainer>
    </PokemonDetailsTemplate>
  );
};

export default PokemonDetails;
