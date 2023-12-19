import React from "react";
import {useFirebase} from "../context/Firebase";
import {Navigate} from "react-router-dom";


const AuthRoute = ({ children}) => {
//   console.log(firebase,'asd')
const firebase = useFirebase();
    if (firebase.isLoggedIn) {
        return <Navigate to={"/"} />;
      }
    
      return children;
  }

export default AuthRoute;
