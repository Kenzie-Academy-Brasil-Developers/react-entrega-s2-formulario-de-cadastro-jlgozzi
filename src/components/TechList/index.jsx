import { useState } from "react";
import { useContext, useEffect } from "react";
import { TechContext } from "../../context/TechContext.js";
import { UserContext } from "../../context/UserContext.js";
import { Tech, TechListDiv } from "./style.js";

export const TechList = () => {
  const { techs } = useContext(UserContext);
  const { setModalEditarIsVisible, modalEditarIsVisible, setTech } =
    useContext(TechContext);

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
