import styled from "styled-components";

export const LoginPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-4);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  header > h2 {
    color: var(--color-primary);
  }

  main {
    max-width: 90%;
    width: 369px;
    height: 502px;
    background-color: var(--grey-3);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  span {
    color: var(--grey-1);
  }
  h2 {
    color: var(--grey-0);
  }
  a {
    text-decoration: none;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;

    color: var(--grey-0);
    background-color: var(--grey-1);

    border-radius: 4px;
    border: 1px solid var(--grey-1);

    padding: 15px;
  }
`;
