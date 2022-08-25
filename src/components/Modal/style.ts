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
`;
