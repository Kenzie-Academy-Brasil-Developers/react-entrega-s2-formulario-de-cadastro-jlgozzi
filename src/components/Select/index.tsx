import { StyledSelect } from "./style";

import { ReactElement } from "react";

interface ISelectProps {
  id: string;
  register: any;
  name: string;
  children: ReactElement[] | ReactElement;
}

const Select = ({ id, register, name, children }: ISelectProps) => {
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
