import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../services/formSchema";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Form from "../../components/Form";

import { LoginPage } from "./style";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import { motion } from "framer-motion";

export interface IFormValuesLogin {
  email: string;
  password: string;
}

const Login = () => {
  localStorage.clear();

  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValuesLogin>({
    resolver: yupResolver(schemaLogin),
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <LoginPage>
        <header>
          <h2>Kenzie Hub</h2>
        </header>
        <main>
          <h2>Login</h2>
          <Form onSubmit={handleSubmit(login)}>
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
      </LoginPage>
    </motion.div>
  );
};

export default Login;
