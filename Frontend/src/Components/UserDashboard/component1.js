import React from 'react'
import { NavLink } from 'react-router-dom';
import { dashData } from './dashboardData'
export default function Component1(props) {
  let idx=props.idx;
  
  return (
    <>
    <NavLink to={dashData[idx].DirectTo}>
    {  console.log(dashData[props.idx].DirectTo)}
    <div className="box m-3" style={{padding:"15px 20px 20px"}}>
      <div className=' d-inline-flex align-items-center' style={{paddingBottom:"15px 15px"}}>
        <div>
          <img src={dashData[props.idx].imgUrl} alt ="imaje" className='comp1img '/>
  
        </div>
        <div>
        <h2 style={{paddingRight:"4px",fontSize:"28px"}}>{dashData[idx].title}</h2>
        <p style={{fontSize:"20px"}}>{dashData[idx].desc}</p>
        </div>
      </div>
    </div>
    </NavLink>
    </>
  )
}
