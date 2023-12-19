import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const MyNavbar = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();
  const firebaseAuth = getAuth();

  const userSignOut = () => {
    localStorage.removeItem('isLoggedIn')
    signOut(firebaseAuth).then(() => {
      navigate("/login");
    });
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      {firebase.isLoggedIn ? (
        <>
          <Navbar.Brand id="margin">Billing Form</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
          </Nav>
          <Col xs="auto" className="marg">
            <Button type="submit" onClick={userSignOut}>
              Logout
            </Button>
          </Col>
        </>
      ) : (
        <>
          <Navbar.Brand id="margin">Billing Form</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">SignUp</Nav.Link>
          </Nav>
        </>
      )}
    </Navbar>
  );
};

export default MyNavbar;
