import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
const [loggedIn, setLoggedIn] = useState(undefined);
const[UserName,setUsername]=useState("");
const[userprofile,setuserprofile]=useState("");

  async function getuserdeatils() {
    try {
    const res=await axios.get("/auth/dashboard");
    setUsername(res.data.name);  
    setuserprofile(res.data.profilePic);
    // console.log("DASBOARD",res.data.profilePic);
    } catch (err) {
        console.error(err);
    }
  }
  async function getLoggedIn() {
    const loggedInRes = await axios.get("/auth/loggedIn");
    setLoggedIn(loggedInRes.data);
  }
  
  useEffect(() => {
    getuserdeatils();
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{UserName,userprofile,getuserdeatils, loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };