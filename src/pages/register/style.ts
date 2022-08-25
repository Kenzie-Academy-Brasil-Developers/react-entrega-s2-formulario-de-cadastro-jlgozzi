import styled from "styled-components";

export const RegisterPage = styled.div`
  width: 100vw;

  background-color: var(--grey-4);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  header {
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;
    width: 369px;
  }
  header > a {
    text-decoration: none;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;

    color: var(--grey-0);
    background-color: var(--grey-2);

    border-radius: 4px;
    border: 1px solid var(--grey-2);

    padding: 10px;
  }
  header > a:hover {
    background-color: var(--grey-1);
    border: 1px solid var(--grey-1);
    transition: 0.3s;
  }
  header > a:active {
    transform: scale(0.98);
  }
  header > h2 {
    color: var(--color-primary);
  }

  main {
    max-width: 90%;
    width: 369px;
    height: 900px;

    background-color: var(--grey-3);
    border-radius: 8px;
    margin-bottom: 30px;

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
`;
