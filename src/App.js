import "./App.css";
// import { Switch, Route } from "react-router-dom";
// import Login from "./pages/login";
// import Dashboard from "./pages/dashboard";
// import Register from "./pages/register";
import RoutesTree from "./routes";
import GlobalStyle from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesTree />
    </>
  );
}

export default App;
