// import { useState } from "react";
import { useContext } from "react";
import { useTechContext } from "../../context/TechContext";
import { useUserContext } from "../../context/UserContext";
import { Tech, TechListDiv } from "./style";

export const TechList = () => {
  const { techs } = useUserContext();
  const { setModalEditarIsVisible, modalEditarIsVisible, setTech } =
    useTechContext();

  return (
    <>
      {techs.length > 0 && (
        <TechListDiv>
          <ul>
            {techs.map((tech, index) => {
              return (
                <Tech
                  key={index}
                  onClick={(event) => {
                    event.preventDefault();
                    setModalEditarIsVisible(!modalEditarIsVisible);
                    setTech(tech);
                  }}
                >
                  <h4>{tech.title}</h4>
                  <span>{tech.status}</span>
                </Tech>
              );
            })}
          </ul>
        </TechListDiv>
      )}
    </>
  );
};
