import { StyledInput, Error } from "./style";
import { BiError } from "react-icons/bi";

const Input = ({
  type,
  id,
  register,
  error,
  value = undefined,
  isDisabled = false,
  children,
}) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{children}</label>
      <div className="div-input">
        <input
          type={type}
          id={id}
          {...register(id)}
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
