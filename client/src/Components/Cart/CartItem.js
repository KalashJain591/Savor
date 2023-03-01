import React, { useContext } from 'react'
import { useCartContext } from '../../Context/cart_context';
import { FaTrash } from 'react-icons/fa';
import CartAmountToggler from './CartAmountToggler';
import AuthContext from '../../Context/auth_context';
import { NavLink } from 'react-router-dom';

export default function CartItem({ id, price, images, name, total_cost, Quantity ,Weight,unit}) {
    const { removeItem, SetDecrease, SetIncrease } = useCartContext();
    const { userId } = useContext(AuthContext);


    return (
        <>

            <tr>
              <td className="p-0 d-flex  flex-column align-items-center">  <NavLink to={`/SingleProduct/${id}`} ><img src={images} alt="product image" style={{ width: "70px", padding: "0px", marginTop: '15px' }} /></NavLink><div className='fs-5 m-2'>{name}</div>
                    <div className='d-sm-none'><CartAmountToggler Quantity={Quantity} id={id} SetDecrease={() => SetDecrease(id, userId)}
                        SetIncrease={() => SetIncrease(id, userId)} /></div> </td>
                {/* <td className="align-middle "><img src={images}  className='m-0 ' alt="" style={{ width: "70px", padding: "0px", margin:"10px"}} /> {name}</td> */}
                {/* <td className="align-middle d-sm-table-cell d-none" value="1">{name}</td> */}
                <td className="align-middle" value="1">₹{price}</td>
                <td className="d-none d-sm-table-cell align-middle p-0"><CartAmountToggler Quantity={Quantity} id={id} SetDecrease={() => SetDecrease(id, userId)}
                    SetIncrease={() => SetIncrease(id, userId)} /> </td>
                <td className="align-middle" value="1">₹{total_cost}</td>
                <td className="align-middle" value="1">{Weight} {unit}</td>

                <td className="align-middle p-0"> <FaTrash onClick={() => removeItem(id, userId)} /></td>
            </tr>

        </>
    )
}
