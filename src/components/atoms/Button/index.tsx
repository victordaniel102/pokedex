import { ReactNode } from "react";
import { ButtonContainer } from "./style";

interface IButton {
  text: string;
  icon?: () => ReactNode;
  onClick: Function;
}

const Button = (props: IButton) => {
  return (
    <ButtonContainer onClick={() => props.onClick()}>
      <>
        {props.icon ? props.icon : null} {props.text}
      </>
    </ButtonContainer>
  );
};

export default Button;
