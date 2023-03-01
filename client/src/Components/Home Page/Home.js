import React, { useContext, useEffect } from 'react'
import FrontSection from './FrontSection'
import Features from './Features'
import AdditionalServices from './AdditionalServices'
import Association from './Association'
import TopDeals from './TopDeals'
import Carousel from './CarouselSection1'
import AuthContext from '../../Context/auth_context'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../Context/cart_context'
export default function Home() {
  const { loggedIn , admin, getuserdeatils} = useContext(AuthContext);
  // const[changeId, setChangeId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getuserdeatils();
  }, [])
  
  const { cart } = useCartContext();
  useEffect(() => {
    if(loggedIn){
      const lcd=localStorage.getItem("SavorCart");
      const lcdsz =Object.keys(lcd).length/185;
      if(lcdsz!==cart.length){
        window.location.reload()
      }  
    }
  }, [])

  useEffect(() => {
    if(admin===true){
      navigate("/adminpanel/");          
    }
  }, [admin])
  return (
    <div>
      <Carousel/>
        {/* <FrontSection/> */}
        {/* <Features/> */}
        <TopDeals/>
        <AdditionalServices/>
        {/* <Association/> */}
    </div>
  )
}
