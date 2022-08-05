import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard";

const RoutesTree = () => {
  return (
    <Routes>
      <Route path={"/dashboard"} element={<Dashboard />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
    </Routes>
  );
};

export default RoutesTree;