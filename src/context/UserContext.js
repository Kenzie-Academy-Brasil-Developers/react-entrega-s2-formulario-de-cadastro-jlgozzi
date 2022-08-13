import { createContext, useState, useEffect } from "react";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      const token = localStorage.getItem("@token");
      const userId = localStorage.getItem("@user-id");

      api.defaults.headers.authorization = `Bearer ${token}`;

      if (token) {
        try {
          const response = await api.get(`/profile`);
          setUser(response.data);
        } catch (err) {
          console.log(err);
        }
      }
      setLoading(false);
    }
    loadData();
  }, []);

  const login = (data) => {
    console.log("oiata");

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
        console.log(response);
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
    <UserContext.Provider value={{ registerFunction, login, user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
