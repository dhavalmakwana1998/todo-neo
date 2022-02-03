import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../../Store/Store";
import routes from "../../utils/routes";

const AuthRoute = () => {
  const { token } = useStore();

  return !token ? <Outlet /> : <Navigate to={routes.dashboard} />;
};

export default AuthRoute;
