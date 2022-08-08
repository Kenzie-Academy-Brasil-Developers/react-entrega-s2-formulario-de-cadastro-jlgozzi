import { Link, useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../services/formSchema";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Select from "../../components/Select";

import { RegisterPage } from "./style";
import api from "../../services/api";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const onSubmitFunction = (data) => {
    delete data.passwordConfirm;

    api
      .post(`users`, data)
      .then((response) => {
        // console.log(response);
        toast("Usuário criado com sucesso!");
      })
      .catch((err) => toast(err.message));
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
          <Input
            type={"text"}
            id={"name"}
            register={register}
            error={errors?.name}
          >
            Nome
          </Input>

          <Input
            type={"email"}
            id={"email"}
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

          <Input
            type={"password"}
            id={"passwordConfirm"}
            register={register}
            error={errors?.passwordConfirm}
          >
            Confirmar Senha
          </Input>

          <Input
            type={"text"}
            id={"bio"}
            register={register}
            error={errors?.bio}
          >
            Bio
          </Input>

          <Input
            type={"number"}
            id={"contact"}
            register={register}
            error={errors?.contact}
          >
            Contato
          </Input>

          <Select
            id={"course_module"}
            register={register}
            name={"Selecionar módulo"}
          >
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
      <ToastContainer />
    </RegisterPage>
  );
};

export default Register;
