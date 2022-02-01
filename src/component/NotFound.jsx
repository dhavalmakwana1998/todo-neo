import React from "react";
import { Link } from "react-router-dom";
import routes from "../utils/routes";

function NotFound() {
  return (
    <div className="auth-wrapper">
      <div className="container">
        <div className="wrapper" style={{ padding: "6px" }}>
          <h1>
            Page not found back to <Link to={routes.dashboard}>Home</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
