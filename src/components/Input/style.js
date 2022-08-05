import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    color: var(--grey-0);
    font-weight: 400;
    font-size: 1rem;
  }

  input {
    background-color: var(--grey-2);
    border: 1px solid transparent;
    border-radius: 4px;
    height: 48px;
  }
  input:focus {
    outline: none;
    border: 1px solid var(--grey-0);
    transition: 0.4s;
  }
`;
