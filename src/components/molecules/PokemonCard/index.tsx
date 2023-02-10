import { useNavigate } from "react-router-dom";
import Image from "../../atoms/Image";
import {
  PokemonCardContainer,
  PokemonImage,
  PokemonName,
  PokemonTag,
} from "./style";

interface IPokemonCard {
  id?: string;
  name: string;
  image?: string;
}

const PokemonCard = (props: IPokemonCard) => {
  const navigate = useNavigate();

  return (
    <PokemonCardContainer onClick={() => navigate(`/pokemon/${props.id}`)}>
      <PokemonImage>
        <Image src={props.image!} size={"75px"} />
      </PokemonImage>
      <PokemonName>
        {props.name}
        <PokemonTag>#{props.id}</PokemonTag>
      </PokemonName>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
