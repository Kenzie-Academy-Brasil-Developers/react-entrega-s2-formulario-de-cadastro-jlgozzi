import { DashboardHeader, DashboardMain, DashboardPage } from "./style";

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
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
            <h3>Olá João</h3>
            <span>Módulo</span>
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
  );
};

export default Dashboard;
