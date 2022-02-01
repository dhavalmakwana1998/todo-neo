import "./App.css";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Dashboard from "./component/Dashboard";
import ProtectedRoute from "./component/ProtectedRoute";
import NotFound from "./component/NotFound";
import ToDo from "./component/Todo/ToDo";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />

            <Route exact path="/" element={<ProtectedRoute />}>
              <Route exact path="/" element={<Dashboard />} />
            </Route>
            <Route exact path="/todo" element={<ProtectedRoute />}>
              <Route exact path="/todo" element={<ToDo />} />
            </Route>

            <Route path="*" exact element={<NotFound />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
