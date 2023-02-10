import { useNavigate } from "react-router-dom";
import Image from "../../atoms/Image";
import { PokemonCardContainer, PokemonName, PokemonTag } from "./style";

interface IPokemonCard {
  id?: string;
  name: string;
  image?: string;
}

const PokemonCard = (props: IPokemonCard) => {
  const navigate = useNavigate();

  return (
    <PokemonCardContainer onClick={() => navigate(`/pokemon/${props.id}`)}>
      <Image src={props.image!} size={"md"} />
      <PokemonName>
        {props.name}
        <PokemonTag>#{props.id}</PokemonTag>
      </PokemonName>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
