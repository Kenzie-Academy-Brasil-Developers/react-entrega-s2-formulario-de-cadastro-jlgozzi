import { DashboardHeader, DashboardMain, DashboardPage } from "./style";
import Button from "../../components/Button";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.js";
import { TechList } from "../../components/TechList";
import Modal from "../../components/Modal";
import { TechContext } from "../../context/TechContext";
import ModalEditar from "../../components/ModalEditar";

const Dashboard = () => {
  const { user, loading } = useContext(UserContext);
  const { modalIsVisible, setModalIsVisible, modalEditarIsVisible } =
    useContext(TechContext);

  // console.log(user);
  if (loading === true) {
    return <h1>Loading...</h1>;
  }

  return user ? (
    <DashboardPage>
      <DashboardHeader>
        <div>
          <h2>Kenzie Hub</h2>
          <Link to={"/login"}>Sair</Link>
        </div>
      </DashboardHeader>
      <DashboardMain>
        <section className="intro-box">
          <div>
            <h3>Olá {user.name}</h3>
            <span>{user.course_module}</span>
          </div>
        </section>
        <section className="main-box">
          <div>
            <h3>Tecnologias</h3>
            <button
              className="main-box-button"
              onClick={(event) => {
                event.preventDefault();
                setModalIsVisible(!modalIsVisible);
              }}
            >
              <BsFillBookmarkPlusFill />
            </button>
          </div>
          <TechList />
        </section>
      </DashboardMain>
      {modalIsVisible && <Modal />}
      {modalEditarIsVisible && <ModalEditar />}
    </DashboardPage>
  ) : (
    <Navigate to="/login" />
  );
};

export default Dashboard;
