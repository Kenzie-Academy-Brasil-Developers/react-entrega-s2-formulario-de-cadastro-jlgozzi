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
    color: var(--grey-0);
    text-decoration: none;
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
