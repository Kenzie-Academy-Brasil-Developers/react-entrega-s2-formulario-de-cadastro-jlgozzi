import { DashboardHeader, DashboardMain, DashboardPage } from "./style";

import { Link } from "react-router-dom";
import api from "../../services/api";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    api
      .get(`users/${userId}`)
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
  }, [userId]);

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
  );
};

export default Dashboard;
