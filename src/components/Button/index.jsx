import { ButtonStyled } from "./style";

const Button = ({ children, color }) => {
  return <ButtonStyled color={color}>{children}</ButtonStyled>;
};

export default Button;
