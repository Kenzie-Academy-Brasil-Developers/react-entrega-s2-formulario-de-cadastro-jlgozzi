import styled from "styled-components";

export const ButtonStyled = styled.button`
  font-size: 1rem;
  font-weight: 500;

  color: var(--grey-0);
  background-color: ${(props) =>
    props.color ? "var(--color-primary)" : "var(--grey-1)"};

  border-radius: 4px;
  border: 1px solid
    ${(props) => (props.color ? "var(--color-primary)" : "var(--grey-1)")};

  padding: 15px;
`;
