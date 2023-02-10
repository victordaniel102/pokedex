import { InputContainer, InputWrapper } from "./style";
import { InputHTMLAttributes, ReactNode, useRef } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
}

const Input = (props: IInput) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <InputWrapper>
      {props.label ? <label>{props.label}</label> : null}

      <InputContainer {...props} onClick={() => inputRef?.current?.focus()}>
        <>{props.icon ? props.icon : null}</>
        <input {...props} ref={inputRef} autoComplete="off" />
      </InputContainer>
    </InputWrapper>
  );
};

export default Input;
