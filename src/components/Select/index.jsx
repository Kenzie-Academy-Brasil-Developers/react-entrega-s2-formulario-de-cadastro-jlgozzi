import { StyledSelect } from "./style";

const Select = ({ id, register, name, children }) => {
  return (
    <StyledSelect>
      <label htmlFor={id}>{name}</label>
      <select id={id} {...register(id)}>
        {children}
      </select>
    </StyledSelect>
  );
};

export default Select;
