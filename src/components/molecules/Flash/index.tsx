import { ReactNode } from "react";
import { FlashContainer, FlashDescription, FlashTitle } from "./style";

interface IFlash {
  icon: ReactNode;
  title: string;
  description?: string;
}

const Flash = (props: IFlash) => {
  return (
    <FlashContainer>
      <>{props.icon}</>
      <FlashTitle>{props.title}</FlashTitle>
      {props.description ? (
        <FlashDescription>{props.description}</FlashDescription>
      ) : null}
    </FlashContainer>
  );
};

export default Flash;
