import { Avatar } from 'antd'
import React from 'react'

export default function UserInfo(props) {
  return (
    <div>
        <div className="alert alert-dark" role="alert">
            <Avatar src={props.profilePic}/>
            <p>name : {props.name}</p>
            <p>phoneno : {props.phoneno}</p>
            <p>email : {props.email}</p>
            <p>dob : {props.dob}</p>
        </div>
    </div>
  )
}
