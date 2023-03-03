import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [UserName, setUsername] = useState("");
  const [userprofile, setuserprofile] = useState("");
  const [userId, setUserId] = useState("")
  const [admin, setadmin] = useState("false");
  async function getuserdeatils(){
    try {
      // console.log("refresh get user details")
      const res = await axios.get("/auth/dashboard");
      setUsername(res.data.name);
      setuserprofile(res.data.profilePic);
      setUserId(res.data._id);
      // console.log(res.data.admin);
      setadmin(res.data.admin);
      await axios.get(`/cart/${res.data._id}`)
        .then((responce) => {
          // console.log(responce)
          let localStore = [];
          if(loggedIn===true){
              localStorage.setItem("SavorCart", JSON.stringify([]));
          }
          responce.data.products.map((curElem)=>{
            localStore.push({Quantity:curElem.quantity, id: curElem.productId, images:curElem.images, max:6, name: curElem.name, price:curElem.price,Weight:curElem.weight,unit:curElem.unit,total_cost:(curElem.quantity*curElem.price) })
            console.log("ls", localStore);
            if (localStore === 'undefined') {
              console.log("[]")
              localStorage.setItem("SavorCart", JSON.stringify([]));
            }
            else{
              localStorage.setItem("SavorCart", JSON.stringify(localStore));
            }
          })
        })
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
    <AuthContext.Provider value={{ UserName,admin, userprofile, getuserdeatils,setadmin,loggedIn,setLoggedIn, getLoggedIn, userId }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };