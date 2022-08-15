import Form from "../Form";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaUpdateTech } from "../../services/formSchema";

import { ModalDiv } from "./style";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { TechContext } from "../../context/TechContext";
import { UserContext } from "../../context/UserContext";

const ModalEditar = () => {
  const { setModalEditarIsVisible, deleteTech, updateTech, tech } =
    useContext(TechContext);
  // const { techs } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaUpdateTech),
  });

  return (
    <ModalDiv>
      <div className="modal">
        <div className="modal-title">
          <h4>Atualizar Tecnologia</h4>
          <button
            onClick={(event) => {
              event.preventDefault();
              setModalEditarIsVisible(false);
            }}
          >
            <IoMdCloseCircleOutline />
          </button>
        </div>
        <div className="modal-body">
          <Form onSubmit={handleSubmit(updateTech)}>
            {/* <div className="tech-name">
              <span>Tecnologia:</span>
              <p>{tech.title}</p>
            </div> */}
            <Input
              type={"title"}
              id="title"
              register={register}
              error={errors?.title}
              isDisabled={true}
              value={tech.title}
            >
              Nome
            </Input>

            <Select id={"status"} register={register} name={"Status"}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </Select>
            <div className="button-div">
              <Button>Salvar Tecnologia</Button>
              <span
                className="button-delete"
                onClick={(event) => {
                  event.preventDefault();
                  console.log(tech);
                  deleteTech(tech.id);
                }}
              >
                Excluir
              </span>
            </div>
          </Form>
        </div>
      </div>
    </ModalDiv>
  );
};

export default ModalEditar;
