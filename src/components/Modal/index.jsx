import Form from "../Form";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaNewTech } from "../../services/formSchema";

import { ModalDiv } from "./style";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { TechContext } from "../../context/TechContext";

const Modal = () => {
  const { setModalIsVisible, createNewTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaNewTech),
  });

  return (
    <ModalDiv>
      <div className="modal">
        <div className="modal-title">
          <h4>Cadastrar Tecnologia</h4>
          <button
            onClick={(event) => {
              event.preventDefault();
              setModalIsVisible(false);
            }}
          >
            <IoMdCloseCircleOutline />
          </button>
        </div>
        <div className="modal-body">
          <Form onSubmit={handleSubmit(createNewTech)}>
            <Input
              type={"title"}
              id="title"
              register={register}
              error={errors?.title}
            >
              Nome
            </Input>
            <Select id={"status"} register={register} name={"Status"}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </Select>
            <Button>Cadastrar Tecnologia</Button>
          </Form>
        </div>
      </div>
    </ModalDiv>
  );
};

export default Modal;
