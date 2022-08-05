import { FormStyled } from "./style";

const Form = ({ children, onSubmit }) => {
  return <FormStyled onSubmit={onSubmit}>{children}</FormStyled>;
};

export default Form;
