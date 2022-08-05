import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../services/formSchema";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Select from "../../components/Select";

import { RegisterPage } from "./style";

const Register = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
  };

  return (
    <RegisterPage>
      <header>
        <h2>KenzieHub</h2>
        <Link to={`/login`}>Voltar</Link>
      </header>
      <main>
        <h2>Crie sua conta</h2>
        <span>Rápido e grátis, vamos nessa</span>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input id={"name"} register={register}>
            Nome
          </Input>

          <Input id={"email"} register={register}>
            Email
          </Input>

          <Input id={"password"} register={register}>
            Senha
          </Input>

          <Input id={"confirm-password"} register={register}>
            Confirmar Senha
          </Input>

          <Input id={"bio"} register={register}>
            Bio
          </Input>

          <Input id={"contact"} register={register}>
            Contato
          </Input>

          <Select id={"module"} register={register} name={"Selecionar módulo"}>
            <option>Módulo 1</option>
            <option>Módulo 2</option>
            <option>Módulo 3</option>
            <option>Módulo 4</option>
            <option>Módulo 5</option>
            <option>Módulo 6</option>
          </Select>

          <Button color={"true"} type="submit">
            Cadastrar
          </Button>
        </Form>
      </main>
    </RegisterPage>
  );
};

export default Register;
