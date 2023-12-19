import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import MyNavbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import MyForm from "./components/Form";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import History from "./components/History";
import Update from "./components/Update";
import PrivateRoute from "./routes/private-route";
import AuthRoute from "./routes/auth-route";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              {" "}
              <MyForm />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <AuthRoute>
              {" "}
              <Login />{" "}
            </AuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthRoute>
              <SignUp />
            </AuthRoute>
          }
        />
        <Route
          path="/history"
          element={
            <PrivateRoute>
              <History />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/update/:id"
          element={
            <PrivateRoute>
              <Update />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
