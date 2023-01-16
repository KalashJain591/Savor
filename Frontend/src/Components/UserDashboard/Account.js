import React, { useState } from 'react'
import { userData } from './userData'

export default function Account() {

    const [fname, setFname] = useState(userData[0].firstname);
    const [lname, setLname] = useState(userData[0].lastname);
    const [mob, setmob] = useState(userData[0].phoneno);
    const [gender, setgender] = useState(userData[0].gender);
    const [address, setaddress] = useState(userData[0].addres);
    const [email, setemail] = useState(userData[0].email);


    const [editmode, seteditmode] = useState(false);
   
    const setProfile = (e) => {
        if (editmode) {
            e.preventDefault();
            userData[0].firstname = fname
            userData[0].lastname = lname
            userData[0].gender = gender
            userData[0].phoneno = mob
            userData[0].email = email
            userData[0].addres = address
            console.log(userData);
        }

        seteditmode(!editmode);
    }
    const changeProfile = (e) => {
       let key=e.target.id
       let val=e.target.value
       if(key==="fname")
       setFname(val);
       if(key==="lname")
       setLname(val);
       if(key==="gender")
       setgender(val);

       if(key==="mob")
       setmob(val);
       if(key==="fname")
       setFname(val);
       if(key==="address")
       setaddress(val);
       if(key==="email")
       setemail(val);

    }

    return (
        <div>
            <div className='container'>
                <h1 className='text-center'> Your Account </h1>
                <div className='row'>
                    <div className='col-12 col-sm-4 d-flex flex-column'>
                        <div className='align-self-center'>
                            <img src="/images/user_image.jpg" className='profile-photo' alt="profile photo" />
                        </div>
                        <input className='align-self-center' type='file'></input>

                    </div>

                    <div className='col-12 col-sm-8 d-flex flex-column'>

                        <div>
                            {editmode ?
                                <button type="submit" className='btn btn-md   my-3 ' onClick={setProfile}>Save and update </button>
                                : <button className='btn btn-md  my-3 ' onClick={setProfile}>Edit Information</button>}
                        </div>
                        <form>
                            <div className='my-3'>
                                <span >Your Name </span><br />
                                <input type="text" value={fname} id="fname" onChange={changeProfile} disabled={!editmode} className="me-3" ></input>
                                <input type="text" value={lname} id="lname" onChange={changeProfile} disabled={!editmode} className=" me-3"></input>
                            </div>
                            <div className='my-3'>
                                <span>Your Gender </span>
                                <select id="gender" className="form-select " style={{ width: "30%" }} aria-label="Default select example" onChange={changeProfile}>
                                    <option selected>{gender}</option>
                                    <option value="Male" disabled={!editmode} >Male</option>
                                    <option value="Female" disabled={!editmode} >Female</option>
                                    <option value="other" disabled={!editmode} >I came for shopping here</option>
                                </select>
                            </div>
                            <div className='my-3'>
                                <span>Email Information  </span><br />
                                <input type="email" pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}' id="email" value={email} onChange={changeProfile} disabled={!editmode} required className='email'></input>
                            </div>
                            <div className='my-3'>
                                <span>Mobile Number </span><br />
                                <input type="text" maxLength={10} id="mob" pattern="^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$" value={mob} onChange={changeProfile} required disabled={!editmode} ></input>

                            </div>
                            <div className='my-3'>
                                <span>Primary Address</span><br />
                                <input id="address" type="text" value={address} onChange={changeProfile} disabled={!editmode} ></input>

                            </div>
                        </form>
                    </div>




                </div>
            </div>
        </div >

    )
}
