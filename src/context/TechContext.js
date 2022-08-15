import { useContext } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { setUser, techs, setTechs } = useContext(UserContext);

  const [modalEditarIsVisible, setModalEditarIsVisible] = useState(false);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [tech, setTech] = useState(null);

  async function createNewTech(data) {
    // console.log(data);

    const userId = localStorage.getItem("@user-id");
    let isError = false;

    await api
      .post("/users/techs", data)
      .then((response) => {
        // console.log(response);
      })
      .catch((err) => {
        // console.log(err);
        isError = true;
      });
    await api
      .get(`/users/${userId}`)
      .then((response) => setTechs(response.data.techs))
      .catch((err) => (isError = true));

    if (isError === false) {
      toast.success("Tecnologia criada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setModalIsVisible(false);
    } else {
      toast.error("Não foi possível criar Tecnologia!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  async function deleteTech(tech_id) {
    const userId = localStorage.getItem("@user-id");
    let isError = false;

    await api
      .delete(`/users/techs/${tech_id}`)
      .then((response) => {
        // console.log(response);
      })
      .catch((err) => {
        // console.log(err);
        isError = true;
      });
    await api
      .get(`/users/${userId}`)
      .then((response) => setTechs(response.data.techs))
      .catch((err) => (isError = true));

    if (isError === false) {
      toast.success("Tecnologia excluída com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setModalEditarIsVisible(false);
    } else {
      toast.error("Não foi possível excluir Tecnologia!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  async function updateTech(data) {
    const userId = localStorage.getItem("@user-id");
    const status = { status: data.status };

    let isError = false;

    await api
      .put(`/users/techs/${tech.id}`, status)
      .then((response) => {
        // console.log(response);
      })
      .catch((err) => {
        // console.log(err);
        isError = true;
      });
    await api
      .get(`/users/${userId}`)
      .then((response) => setTechs(response.data.techs))
      .catch((err) => (isError = true));

    if (isError === false) {
      toast.success("Tecnologia atualizada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setModalEditarIsVisible(false);
    } else {
      toast.error("Não foi possível atualizar Tecnologia!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  return (
    <TechContext.Provider
      value={{
        modalIsVisible,
        setModalIsVisible,
        modalEditarIsVisible,
        setModalEditarIsVisible,
        createNewTech,
        deleteTech,
        updateTech,
        tech,
        setTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
