import { createContext, useState, useEffect, useContext } from "react";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [techs, setTechs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      const token = localStorage.getItem("@token");

      api.defaults.headers.authorization = `Bearer ${token}`;

      if (token) {
        try {
          const response = await api.get(`/profile`);
          setUser(response.data);
          setTechs(response.data.techs);
          // console.log(tech);
        } catch (err) {
          console.log(err);
        }
      }
      setLoading(false);
    }
    loadData();
  }, [user]);

  const login = (data) => {
    api
      .post(`/sessions`, data)
      .then((response) => {
        toast.success("Bem Vindo!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // console.log(response);
        localStorage.setItem("@token", response.data.token);
        localStorage.setItem("@user-id", response.data.user.id);
        setUser(response.data.user);
        api.defaults.headers.authorization = `Bearer ${response.data.token}`;
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);

        toast.error("Usuário ou senha incorretos!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  const registerFunction = (data) => {
    delete data.passwordConfirm;

    api
      .post(`users`, data)
      .then((response) => {
        // console.log(response);
        toast("Usuário criado com sucesso!");
        navigate("/login");
      })
      .catch((err) => {
        // console.log(err);
        toast(err.response?.data.message);
      });
  };

  return (
    <UserContext.Provider
      value={{
        registerFunction,
        login,
        user,
        loading,
        setUser,
        techs,
        setTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
