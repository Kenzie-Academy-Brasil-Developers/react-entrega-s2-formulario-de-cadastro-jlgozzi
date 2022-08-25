import { ReactElement, useContext } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { useUserContext } from "./UserContext";

interface IChildren {
  children: ReactElement[] | ReactElement;
}
interface IDataTech {
  title: string;
  status: string;
}
interface ITechId {
  id: string;
}

interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface ITechContext {
  modalIsVisible: boolean;
  setModalIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  modalEditarIsVisible: boolean;
  setModalEditarIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  createNewTech: (data: IDataTech) => Promise<void>;
  deleteTech: (tech_id: ITechId) => Promise<void>;
  updateTech: (data: IDataTech) => Promise<void>;
  tech: ITech;
  setTech: React.Dispatch<React.SetStateAction<ITech>>;
}

const TechContext = createContext<ITechContext>({} as ITechContext);

const TechProvider = ({ children }: IChildren) => {
  const { setTechs } = useUserContext();

  const [modalEditarIsVisible, setModalEditarIsVisible] =
    useState<boolean>(false);
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [tech, setTech] = useState<ITech>({} as ITech);

  async function createNewTech(data: IDataTech) {
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
  async function deleteTech(tech_id: ITechId) {
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

  async function updateTech(data: IDataTech) {
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

export function useTechContext(): ITechContext {
  const context = useContext(TechContext);

  return context;
}
