import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
const [loggedIn, setLoggedIn] = useState(undefined);
const[UserName,setUsername]=useState("");

  async function getuser() {
//     try {
//     const name=await axios.get("/auth/getusername");
//   setUsername(name.data);  
//   // console.log(name.data+" nahi chal raha hey");
//   } catch (err) {
//       console.error(err);
//     }
  }
  async function getLoggedIn() {
    const loggedInRes = await axios.get("/auth/loggedIn");
    setLoggedIn(loggedInRes.data);
  }
  
  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{UserName,setUsername, loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };