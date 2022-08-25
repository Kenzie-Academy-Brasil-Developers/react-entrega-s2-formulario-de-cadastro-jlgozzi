import { ReactElement } from "react";
import { FormStyled } from "./style";

interface IFormProps {
  children: ReactElement[] | ReactElement;
  onSubmit: () => void;
}

const Form = ({ children, onSubmit }: IFormProps) => {
  return <FormStyled onSubmit={onSubmit}>{children}</FormStyled>;
};

export default Form;
