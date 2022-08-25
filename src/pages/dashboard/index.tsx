import { DashboardHeader, DashboardMain, DashboardPage } from "./style";

import { BsFillBookmarkPlusFill } from "react-icons/bs";

import { Link, Navigate } from "react-router-dom";

import { useTechContext } from "../../context/TechContext";
import { useUserContext } from "../../context/UserContext";

import { TechList } from "../../components/TechList";
import Modal from "../../components/Modal";
import ModalEditar from "../../components/ModalEditar";

import { motion } from "framer-motion";

const Dashboard = () => {
  const { user, loading, techs } = useUserContext();
  const { modalIsVisible, setModalIsVisible, modalEditarIsVisible } =
    useTechContext();

  if (loading === true) {
    return <h1>Loading...</h1>;
  }

  return user ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
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
    </motion.div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Dashboard;
