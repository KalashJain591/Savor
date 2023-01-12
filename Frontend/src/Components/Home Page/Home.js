import React from 'react'
import FrontSection from './FrontSection'
import Features from './Features'
import AdditionalServices from './AdditionalServices'
import Association from './Association'
import TopDeals from './TopDeals'
export default function Home() {
  return (
    <div>
        <FrontSection/>
        <Features/>
        <TopDeals/>
        <AdditionalServices/>
        <Association/>
    </div>
  )
}
