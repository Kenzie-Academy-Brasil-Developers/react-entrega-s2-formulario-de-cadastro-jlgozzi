import styled from "styled-components";

export const TechListDiv = styled.div`
  margin: 0 auto;
  width: 70%;

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* gap: 10px; */

  background-color: var(--grey-3);

  ul {
    margin: 15px auto;

    border-radius: 4px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 95%;
  }
`;

export const Tech = styled.li`
  background-color: var(--grey-4);
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  &&:hover {
    background-color: var(--grey-2);
    transition: 0.3s;
  }

  h4 {
    margin-left: 2%;
  }
  span {
    margin-right: 2%;
  }
`;
