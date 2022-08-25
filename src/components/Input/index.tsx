import { StyledInput, Error } from "./style";
import { BiError } from "react-icons/bi";
import { UseFormRegister } from "react-hook-form";

import { IFormValues } from "../Modal";
import { IFormValuesLogin } from "../../pages/login";
import { IFormValuesRegister } from "../../pages/register";

interface IInputProps {
  type: string;
  id: string;
  error?: IError;
  value?: string;
  isDisabled?: boolean;
  children: string;
  register:
    | any
    | UseFormRegister<IFormValues>
    | UseFormRegister<IFormValuesLogin>
    | UseFormRegister<IFormValuesRegister>;
}

interface IError {
  message?: string;
  title?: string;
}

const Input = ({
  type,
  id,
  register,
  error,
  value = undefined,
  isDisabled = false,
  children,
}: IInputProps) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{children}</label>
      <div className="div-input">
        <input
          type={type}
          id={id}
          {...(register && { ...register(id) })}
          disabled={isDisabled}
          value={value}
        />

        {error?.message && (
          <Error>
            <BiError />
            <span>{error.message}</span>
          </Error>
        )}
      </div>
    </StyledInput>
  );
};

export default Input;
