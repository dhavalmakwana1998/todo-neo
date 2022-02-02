import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStore } from "../../Store/Store";
import routes from "../../utils/routes";

const AuthRoute = () => {
  const { currentUser } = useStore();

  return !currentUser ? <Outlet /> : <Navigate to={routes.dashboard} />;
};

export default AuthRoute;
