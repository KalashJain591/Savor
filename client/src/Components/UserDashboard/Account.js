import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../Context/auth_context';
import { userData } from './userData'
import { storage } from '../../Firebase/firebase';
import {getDownloadURL, listAll, ref, uploadBytes} from 'firebase/storage';
import { v4 } from 'uuid';

export default function Account() {
    const [imageUpload,setImageUpload]=useState(null);
    const fileListRef=ref(storage,'files/');
    const { userId } = useContext(AuthContext);
    const [imagewasuploading, setimagewasuploading] = useState(false);

    const checkimg=()=>{
        // console.log(imageUpload);
        if(imageUpload.size>200000){
          return false;
        }
        const fileExtension = imageUpload.name.split(".").at(-1);
        const allowedFileTypes = ["jpg", "png","gif","jpeg"];
        if (!allowedFileTypes.includes(fileExtension)) {
            return false;
        }  
        return true;
    }

    const imgupl=()=>{
        alert("Image was Succesfully Updated");
        window.location.reload();
    }

    const afterurl=async(url)=>{
        // console.log(url);
        await axios.post(`/auth/changeprofilepic/${userId}`,{profilePic:url})
        .then(()=>{imgupl()})
    // console.log(url);
    }

    const changeimage=async ()=>{

        // console.log("change image");
        try{
        if(!checkimg()){
            alert("Please Upload Valid image on 200KB");
        }
        else if(imageUpload!==null){
            setimagewasuploading(true);
            const imageRef=ref(storage,'files/'+v4()+imageUpload.name);
            await uploadBytes(imageRef,imageUpload).then((snapshot)=>{
              getDownloadURL(snapshot.ref).then((url)=>{
                afterurl(url);
              })
            }) 
        }
        else{
            console.log("nothing")
        }
       //  console.log(user);
          } catch (err) {
         console.error(err);
           }
    }
        
    useEffect(() => {
        changeimage();
    }, [imageUpload])
    

    const [userDetails, setuserDetails] = useState({});

    async function details() {
        try {
            const response = await axios.get("/auth/dashboard")
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
    }, []);

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
    const validpassword = (password) => {
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
            await axios.post(`/auth/editinfo/${userId}`, { name, email, password: Password, phoneno: mob })
                .then((res) => { alert("DETAILS UPDATED") })
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
                <h1 className='text-center acc'>Your Account</h1>
                <div className='row'>
                    <div className='col-12 col-sm-4 d-flex flex-column'>
                        <div className='align-self-center'>
                            <img src={userDetails.profilePic} className='profile-photo' alt="profile photo" />
                        </div>

        {imagewasuploading?
        <div className='container row'>
        <h4 className='col'>Image was Uploading</h4>    
    <div class="spinner-border text-secondary  " role="status">
                <span class="visually-hidden">Loading...</span>
    </div>
    </div>
    : <input type="file" className='btn btn-secondary my-4'  accept="image/png, image/gif, image/jpeg"  onChange={(event)=>{setImageUpload(event.target.files[0])}} />}
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
                            </div>
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
                        </form>
                    </div>
                </div>
            </div>
        </div >

    )
}

