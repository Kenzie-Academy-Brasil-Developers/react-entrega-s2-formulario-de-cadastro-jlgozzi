import { ReactElement } from "react";
import { ButtonStyled } from "./style";

interface IButtonProps {
  children: string;
  color?: string;
  type?: string;
}

const Button = ({ children, color }: IButtonProps) => {
  return <ButtonStyled color={color}>{children}</ButtonStyled>;
};

export default Button;
