import { Link } from "react-router-dom";

import { ITechs, useUserContext } from "../../context/UserContext";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRegister } from "../../services/formSchema";

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Select from "../../components/Select";

import { RegisterPage } from "./style";

import { motion } from "framer-motion";

export interface IFormValuesRegister {
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
}

const Register = () => {
  const { registerFunction } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValuesRegister>({
    resolver: yupResolver(schemaRegister),
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <RegisterPage>
        <header>
          <h2>KenzieHub</h2>
          <Link to={`/login`}>Voltar</Link>
        </header>
        <main>
          <h2>Crie sua conta</h2>
          <span>Rápido e grátis, vamos nessa</span>
          <Form onSubmit={handleSubmit(registerFunction)}>
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
      </RegisterPage>
    </motion.div>
  );
};

export default Register;
