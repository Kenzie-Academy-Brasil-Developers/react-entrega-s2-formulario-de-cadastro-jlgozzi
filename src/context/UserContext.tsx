import {
  createContext,
  useState,
  useEffect,
  ReactElement,
  useContext,
} from "react";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import api from "../services/api";

interface IChildren {
  children: ReactElement;
}

export interface ITechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// interface IResponse {
//   config: ReactElement;
//   data: { user: IUser; token: string };
//   headers: any;
//   request: any;
//   status: number;
//   statusText: string;
// }

interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITechs[];
  works?: string[];
  created_at: string;
  updated_at: string;
  avatar_url: string;
}
interface IDataUser {
  email: string;
  password: string;
}
interface IDataRegister {
  password: string;
  passwordConfirm?: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
}

interface IUserContext {
  registerFunction: (data: IDataRegister) => void;
  login: (data: IDataUser) => void;
  user: IUser;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  techs: ITechs[];
  setTechs: React.Dispatch<React.SetStateAction<ITechs[]>>;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IChildren) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState<boolean>(true);
  const [techs, setTechs] = useState<ITechs[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      const token = localStorage.getItem("@token");

      api.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
      };

      if (token) {
        try {
          const response = await api.get(`/profile`);
          setUser(response.data);
          setTechs(response.data.techs);
          // console.log(response);
        } catch (err) {
          console.log(err);
        }
      }
      setLoading(false);
    }
    loadData();
  }, []);

  const login = (data: IDataUser) => {
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
        setTechs(response.data.user.techs);
        api.defaults.headers.common = {
          Authorization: `Bearer ${response.data.token}`,
        };
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

  const registerFunction = (data: IDataRegister) => {
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

export function useUserContext(): IUserContext {
  const context = useContext(UserContext);

  return context;
}
