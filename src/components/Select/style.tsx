import styled from "styled-components";

export const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    color: var(--grey-0);
    font-weight: 400;
    font-size: 1rem;
  }

  select {
    color: var(--grey-0);
    background-color: var(--grey-2);
    border: 1px solid transparent;
    border-radius: 4px;
    height: 48px;
  }
  select:focus {
    border: 1px solid var(--grey-0);
    transition: 0.4s;
  }
  option {
    color: var(--grey-5);
    font-size: 1rem;
  }
`;
