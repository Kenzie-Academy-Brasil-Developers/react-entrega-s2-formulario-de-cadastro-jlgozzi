import { Link, useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../services/formSchema";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Form from "../../components/Form";

import { LoginPage } from "./style";
import api from "../../services/api";
import { useEffect, useState } from "react";

const Login = () => {
  localStorage.clear();
  const [token, setToken] = useState(null);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmitFunction = (data) => {
    // console.log(data);

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
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user.id);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      })
      .catch((err) =>
        toast.error("Usuário ou senha incorretos!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      );
  };

  return (
    <LoginPage>
      <header>
        <h2>Kenzie Hub</h2>
      </header>
      <main>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            type={"email"}
            id="email"
            register={register}
            error={errors?.email}
          >
            Email
          </Input>

          <Input
            type={"password"}
            id={"password"}
            register={register}
            error={errors?.password}
          >
            Senha
          </Input>

          <Button color={"true"} type="submit">
            Entrar
          </Button>
          <span>Ainda não possui uma conta?</span>
          <Link to={`/register`}>Cadastre-se</Link>
        </Form>
      </main>
      <ToastContainer />
    </LoginPage>
  );
};

export default Login;
