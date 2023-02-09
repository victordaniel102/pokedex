import Image from "../../atoms/Image";
import { PokemonCardContainer, PokemonName, PokemonTag } from "./style";

interface IPokemonCard {
  id: string;
  name: string;
  image: string;
}

const PokemonCard = (props: IPokemonCard) => {
  return (
    <PokemonCardContainer>
      <Image src={props.image} size={"lg"} />
      <PokemonName>
        {props.name}
        <PokemonTag>#{props.id}</PokemonTag>
      </PokemonName>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
