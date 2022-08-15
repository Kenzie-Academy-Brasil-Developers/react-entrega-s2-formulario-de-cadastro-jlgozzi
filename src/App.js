import "./App.css";
import UserProvider from "./context/UserContext.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Switch, Route } from "react-router-dom";
// import Login from "./pages/login";
// import Dashboard from "./pages/dashboard";
// import Register from "./pages/register";
import RoutesTree from "./routes";
import GlobalStyle from "./styles/Global";
import TechProvider from "./context/TechContext";

function App() {
  return (
    <UserProvider>
      <TechProvider>
        <GlobalStyle />
        <RoutesTree />
        <ToastContainer />
      </TechProvider>
    </UserProvider>
  );
}

export default App;
