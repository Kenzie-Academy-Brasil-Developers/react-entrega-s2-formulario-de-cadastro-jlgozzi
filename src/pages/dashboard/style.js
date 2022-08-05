import styled from "styled-components";

export const DashboardPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-4);

  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

export const DashboardHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid var(--grey-3);

  div {
    margin: 0 auto;
    width: 70%;
    max-width: 90%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  div h2 {
    white-space: nowrap;
    color: var(--color-primary);
  }
  div a {
    text-decoration: none;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 500;

    color: var(--grey-0);
    background-color: var(--grey-3);

    border-radius: 4px;
    border: 1px solid var(--grey-3);

    padding: 10px;
  }
`;

export const DashboardMain = styled.main`
  /* background-color: red; */

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  section {
    width: 100%;

    color: var(--grey-0);
  }
  .intro-box {
    border-bottom: 1px solid var(--grey-3);

    height: 118px;
  }
  .intro-box > div {
    margin: 0 auto;

    width: 70%;
    max-width: 90%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .intro-box > div span {
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--grey-1);
  }
  .main-box div {
    margin: 0 auto;
    margin-top: 50px;

    width: 70%;
    max-width: 90%;
  }
`;
