import React from 'react'
import trackRecord from './trackRecord'
export default function TrackComponent(props) {
    // console.log(idx);
    let status=props.idx.status;;
    console.log("hello");
    return (
        <div>
            <div className='d-flex  '>
                <div className='d-flex flex-column justify-content-center'>
                    <span className='dot text-center ' style={{backgroundColor:status ?"green" :"gray",color:status?"black":"white"}}>{status ? "✔" :" "}</span>
                    <div className='line1' style={{borderLeft:status ? "6px solid green" :" 6px solid gray "}}></div>
                </div>
                <i class="fas fa-clipboard-list fa-3x mx-4"></i>
                <div >
                    <p style={{ color: status ? "green":"black" ,fontSize:"25px",fontWeight:"bold" }}>{props.idx.desc}</p>

                </div>
            </div>
        </div>
    )
}
