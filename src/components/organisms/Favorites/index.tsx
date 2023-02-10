import { Pokemon } from "../../../types/pokemon";
import { FavoritesContainer } from "./style";
import { FolderStar } from "phosphor-react";
import Flash from "../../molecules/Flash";

interface IFavorites {
  pokemons: Pokemon[];
}

const Favorites = (props: IFavorites) => {
  return (
    <FavoritesContainer>
      {props.pokemons && props.pokemons.length > 0 ? (
        <></>
      ) : (
        <Flash
          icon={<FolderStar size={"40px"} weight={"bold"} color="#E8D31B" />}
          title="Favoritos"
          description="Nenhum pokemon salvo como favorito."
        />
      )}
    </FavoritesContainer>
  );
};

export default Favorites;
