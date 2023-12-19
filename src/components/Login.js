import React, { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button  from "react-bootstrap/Button";
import { useFirebase } from "../context/Firebase";

const Login = () => {
  const firebase = useFirebase();
  const navigate= useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    if(firebase.isLoggedIn){
      navigate("/"); 
    }
  },[firebase,navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.signinUserWithEmailAndPass(email, password);
  };

  return (
    <div className="container" style={{ width: '450px' }}>
      <h1 className="lable">User Login</h1>

      <Form className="login_form" action="Form.js" onSubmit={handleSubmit}>
        <div className="font">Email </div>
        <input
          type="email"
          autoComplete="on"
          value={email}
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="font1">Password</div>
        <input
          type="password"
          autoComplete="on"
          value={password}
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="form-group">
          <button className="btn btn-primary" type="submit">Login</button>
        </div>
       
          <Button onClick={firebase.signinWithGoogle} className="btn btn-danger">Signin with google</Button>
        

        <div>
          <Link to="/signup">I dont have an account</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
