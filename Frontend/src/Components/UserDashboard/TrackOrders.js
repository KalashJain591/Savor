import React, { useCartContext } from 'react'
import './dashboard.css'
import trackRecord from './trackRecord'
import TrackComponent from './TrackComponent'
export default function TrackOrders() {
    // const { placed } = useCartContext();
    // console.log(placed);
    let status = trackRecord[4].status;
    // if (!placed) {
    //     return (<>
    //         <div className='text-center'>
    //             <h1>Oop's <br />You Have not placed any order yet</h1>
    //         </div>
    //     </>)
    // }
    return (

        < div className='container'>
            <h1 className='text-center my-4'>Track Your Order</h1>
            <div className=' row'>
                <div className='col-12 col-md-5'>
                    {
                        trackRecord.map((key) => {
                            return <TrackComponent idx={key} />
                        })}
                    <h1 className='ms-2 text-center' style={{ backgroundColor: status ? "green" : "gray", color: status ? "black" : "#6d6767" }}>Completed</h1>
                </div>


                <div className='col-12 col-md-7'>
                    <h3 className='text-dark float-end'>expected Delivery :<br /></h3>
                </div>
            </div>
        </div>
    )
}
