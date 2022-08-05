import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../services/formSchema";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Form from "../../components/Form";

import { LoginPage } from "./style";

const Login = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <LoginPage>
      <header>
        <h2>Kenzie Hub</h2>
      </header>
      <main>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input id={"email"} register={register}>
            Nome
          </Input>

          <Input id={"password"} register={register}>
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
  );
};

export default Login;
