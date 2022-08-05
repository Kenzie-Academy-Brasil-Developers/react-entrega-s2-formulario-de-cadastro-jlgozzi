import { StyledInput } from "./style";

const Input = ({ id, register, children }) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{children}</label>
      <input id={id} {...register(id)} />
    </StyledInput>
  );
};

export default Input;
