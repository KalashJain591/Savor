import React, { useContext, useEffect } from 'react'
import FrontSection from './FrontSection'
import Features from './Features'
import AdditionalServices from './AdditionalServices'
import Association from './Association'
import TopDeals from './TopDeals'
import Carousel from './CarouselSection1'
import AuthContext from '../../Context/auth_context'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const { loggedIn , admin, getuserdeatils} = useContext(AuthContext);
  // const[changeId, setChangeId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getuserdeatils();
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
