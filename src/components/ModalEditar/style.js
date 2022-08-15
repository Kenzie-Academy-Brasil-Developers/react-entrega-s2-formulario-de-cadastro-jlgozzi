import styled from "styled-components";

export const ModalDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  .modal {
    width: 369px;
    max-width: 90%;
    height: 342px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 4px;
    background-color: var(--grey-3);
  }
  .modal-title {
    max-height: 50px;
    padding: 0px 10px 0px 10px;

    background-color: var(--grey-2);
    border-radius: 4px 4px 0px 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-title h4 {
    color: var(--grey-0);
  }
  .modal-title button {
    width: 35px;

    background-color: transparent;
    border: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .modal-title svg {
    color: var(--grey-0);
    opacity: 35%;
    width: 140%;
    height: 120%;
  }
  .modal-title svg:hover {
    opacity: 80%;
    transition: 0.3s;
  }
  .modal-body {
    margin-bottom: 10px;
  }
  .tech-name {
    /* background-color: red; */
    height: 100px;
    color: var(--grey-0);
    width: 100%;
    /* background-color: red; */
  }
  .tech-name p {
    width: 100%;
    background-color: var(--grey-2);
    border: 1px solid transparent;
    border-radius: 4px;
    height: 48px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .button-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }
  button {
    width: 60%;
  }
  .button-delete {
    cursor: pointer;

    width: 25%;

    text-align: center;
    font-size: 1rem;
    font-weight: 500;

    color: var(--grey-0);
    background-color: ${(props) =>
      props.color ? "var(--color-primary)" : "var(--grey-1)"};

    border-radius: 4px;
    border: 1px solid
      ${(props) => (props.color ? "var(--color-primary)" : "var(--grey-1)")};

    padding: 15px;
  }
  .button-delete:hover {
    background-color: var(--color-primary-focus);
    transition: 0.5s;
  }
  .button-delete:active {
    transform: scale(0.98);
  }
`;
