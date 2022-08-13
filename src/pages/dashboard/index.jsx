import { DashboardHeader, DashboardMain, DashboardPage } from "./style";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.js";

const Dashboard = () => {
  const { user, loading } = useContext(UserContext);

  return (
    <>
      {loading === true ? (
        <h1>loading...</h1>
      ) : (
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
                <h3>Que pena! Estamos em desenvolvimento :/</h3>
                <p>
                  Nossa aplicação está em desenvolvimento, em breve teremos
                  novidades
                </p>
              </div>
            </section>
          </DashboardMain>
        </DashboardPage>
      )}
    </>
  );
};

export default Dashboard;
