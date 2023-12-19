// import React, { useState, useEffect } from 'react'
// import { FirebaseContext } from '../context/Firebase'
// import { useFirebase } from "./context/Firebase";

// const AppWrapper = ({children}) => {
//     const firebase = useFirebase();
//     const [IsLoggedIn, setIsLoggedIn] = useState(false)

//     const authListener = () => {
//         firebase.auth().onAuthStateChanged(user => {
//           if (user && user.emailVerified) {
//             setIsLoggedIn(true)
//           } else {
//             setIsLoggedIn(false)
//           }
//         })
//       }
    
//       useEffect(() => {
//         authListener()
//       }, [])
    
//   return (
//     <>
//     <FirebaseContext.Provider
//       value={{
//         IsLoggedIn,
//       }}
//     >
//       <main>{children}</main>
//     </FirebaseContext.Provider>
//   </>
//   )
// }

// export default AppWrapper
