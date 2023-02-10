import { TypeContainer } from "./style";

type Type =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "eletric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "unknown"
  | "shadow";

interface IType {
  type: string;
}

const Type = (props: IType) => {
  const getColor = (type: Type): string => {
    switch (type) {
      case "bug":
        return "#91BA2E";
      case "dark":
        return "#2D221C";
      case "dragon":
        return "#29036A";
      case "eletric":
        return "#D4CD00";
      case "fairy":
        return "#F87EA7";
      case "fighting":
        return "#800B11";
      case "fire":
        return "#FC0C0B";
      case "flying":
        return "#085764";
      case "ghost":
        return "#472B53";
      case "grass":
        return "#204000";
      case "ground":
        return "#BFAC21";
      case "ice":
        return "#007C8C";
      case "normal":
        return "#ACA974";
      case "poison":
        return "#611380";
      case "psychic":
        return "#8A0532";
      case "rock":
        return "#474026";
      case "shadow":
        return "#472B53";
      case "steel":
        return "#454545";
      case "unknown":
        return "#454545";
      case "water":
        return "#08517A";
      default:
        return "#ACA974";
    }
  };

  return (
    <TypeContainer color={getColor(props.type as Type)}>
      {props.type}
    </TypeContainer>
  );
};

export default Type;
