import { LogoContainer } from "./style";
import PokemonLogo from "../../../assets/pokemon_logo.png";

type LogoSize = "lg" | "md" | "sm";

interface ILogo {
  size: LogoSize;
}

const Logo = (props: ILogo) => {
  const getSize = (size: LogoSize): string => {
    switch (size) {
      case "lg":
        return "128px";
      case "md":
        return "64px";
      default:
        return "32px";
    }
  };

  return (
    <LogoContainer src={PokemonLogo} size={getSize(props.size)}></LogoContainer>
  );
};

export default Logo;
