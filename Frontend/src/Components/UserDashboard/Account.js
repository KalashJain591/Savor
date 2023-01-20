import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../Context/auth_context';
import { userData } from './userData'

export default function Account() {
    const { userId } = useContext(AuthContext);
    const [userDetails,setuserDetails]=useState({});
 
    async function details() {
        try {
         const response=await axios.get("/auth/dashboard")
            setuserDetails(response.data);
            setname(response.data.name);
            setmob(response.data.phoneno);
            setemail(response.data.email);
          // console.log(response.data);
      } catch (err) {
          console.error(err);
        }
      }
      useEffect(() => {
         details();
      },[]);
  
  

    const [name, setname] = useState(userData[0].firstname);
    // const [lname, setLname] = useState(userData[0].lastname);
    const [mob, setmob] = useState(userData[0].phoneno);
    const [gender, setgender] = useState(userData[0].gender);
    const [address, setaddress] = useState(userData[0].addres);
    const [email, setemail] = useState(userData[0].email);
    const [emailError, setEmailError] = useState('');
    const [mobError, setmobError] = useState('');
    const [NameError, setNameError] = useState('');
    const [Password, setPassword] = useState('');
    const [PasswordError, setPasswordError] = useState('');
    const [editmode, seteditmode] = useState(false);

    const validemail = (email) => {
        const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
            return false;
        }
        setEmailError('');
        return true;

    }
    const validmob = (phone) => {
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!phoneRegex.test(phone)) {
            setmobError('Invalid phone number');
            return false;
        }
        setmobError('');
        return true;
    }
    const validname = (name) => {
        if (!name) {
            setNameError('Complete Name is required');
            return false;
        }
        setNameError('');
        return true;
    }
const  validpassword=(password)=>{
    if (!password) {
        setPasswordError('Password is required');
        return false;
    }
    setNameError('');
    return true;
}


    const setProfile = async (e) => {
        if (editmode) {
            // console.log("setprofile")
            await axios.post(`/auth/editinfo/${userId}`,{name,email,password:Password,phoneno:mob})
            .then((res)=>{alert("DETAILS UPDATED")})

            // e.preventDefault();
            // if (validemail(email) && validmob(mob) && validname(name) && validpassword(Password)) {
            //     userData[0].firstname = name
            //     // userData[0].lastname = lname
            //     userData[0].gender = gender
            //     userData[0].phoneno = mob
            //     userData[0].email = email
            //     userData[0].addresDelivery = address
            // }
            // else
            //     return
            // // console.log(userData);
        }
        seteditmode(!editmode);
    }
    const changeProfile = (e) => {
        let key = e.target.id
        let val = e.target.value
        if (key === "name")
            setname(val);
        // if (key === "lname")
        //     setLname(val);
        if (key === "gender")
            setgender(val);

        if (key === "mob")
            setmob(val);
        if (key === "name")
            setname(val);
        if (key === "address")
            setaddress(val);
        if (key === "email")
            setemail(val);
        if (key === "password")
            setPassword(val);
    }

    
    return (
        <div>
            <div className='container'>
                <h1 className='text-center acc '> Your Account </h1>
                <div className='row'>
                    <div className='col-12 col-sm-4 d-flex flex-column'>
                        <div className='align-self-center'>
                            <img src={userDetails.profilePic} className='profile-photo' alt="profile photo" />
                        </div>
                        <input className='align-self-center' type='file'></input>

                    </div>

                    <div className='col-12 col-sm-8 d-flex flex-column'>

                        <div>
                            {editmode ?
                                <button type="submit" className='btn btn-md my-3 ' onClick={setProfile}>Save and update </button>
                                : <button className='btn btn-md  my-3 ' onClick={setProfile}>Edit Information</button>}
                        </div>
                        <form>
                            <div className='my-3'>
                                <span >Your Name </span><br /> {NameError && <div style={{ fontColor: "red" }}>{NameError}</div>}
                                <input type="text" value={name} id="name" onChange={changeProfile} disabled={!editmode} className="me-3" ></input>
                                {/* <input type="text" value={lname} id="lname" onChange={changeProfile} disabled={!editmode} className=" me-3"></input> */}
                            </div>
                            {/* <div className='my-3'>
                                <span>Your Gender </span>
                                <select id="gender" className="form-select " style={{ width: "30%" }} aria-label="Default select example" onChange={changeProfile}>
                                    <option selected>{gender}</option>
                                    <option value="Male" disabled={!editmode} >Male</option>
                                    <option value="Female" disabled={!editmode} >Female</option>
                                    <option value="other" disabled={!editmode} >I came for shopping here</option>
                                </select>
                            </div> */}
                            <div className='my-3'>
                                <span>Email Information  </span><br /> {emailError && <div style={{ fontColor: "red" }}>{emailError}</div>}
                                <input type="email" pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}' id="email" value={email} onChange={changeProfile} disabled={!editmode} required className='email'></input>
                            </div>
                            <div className='my-3'>
                                <span>New Password</span><br /> {PasswordError && <div style={{ fontColor: "red" }}>{PasswordError}</div>}
                                <input type="password" id="password" value={Password} onChange={changeProfile} disabled={!editmode} required ></input>
                            </div>
                            <div className='my-3'>
                                <span>Mobile Number </span><br /> {mobError && <div style={{ fontColor: "red" }}>{mobError}</div>}
                                <input type="text" maxLength={10} id="mob" pattern="^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$" value={mob} onChange={changeProfile} required disabled={!editmode} ></input>

                            </div>
                            {/* <div className='my-3'>
                                <span>Primary Address</span><br />
                                <input id="address" type="text" value={address} onChange={changeProfile} disabled={!editmode} ></input>

                            </div> */}
                        </form>
                    </div>




                </div>
            </div>
        </div >

    )
}

