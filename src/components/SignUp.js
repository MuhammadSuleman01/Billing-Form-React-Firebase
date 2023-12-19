import React, { useState,useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import {useFirebase} from "../context/Firebase";


const SignUp = () => {
  const firebase = useFirebase();
  const navigate= useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState(''); 
    useEffect(()=>{
      if(firebase.isLoggedIn){
        navigate("/"); 
      }
    },[firebase,navigate]);
  

    const handleSubmit= async (e)=>{

        e.preventDefault();
        await firebase.signupUserWithEmailAndPassword(email,password);
        };
         

  return (
    <div className="container" style={{ width: '480px' }}>
        <h1 className="lable">User SignUp</h1>

        <Form className="login_form" action='Login.js' onSubmit={handleSubmit} >

            <div className="font">Email </div>
            <input type="email" autoComplete='on' value={email} placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} />
           

            <div className="font1">Password</div>
            <input type="password" autoComplete='on' value={password} placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} />
            
            <div className='form-group'>
            <button className="btn btn-primary" type="submit">SignUp</button></div>

            <div><Link to="/login">I have already an account</Link></div>
        </Form>
    </div>
  )
}

export default SignUp
