import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import ServicesSection from '../components/ServicesSection'
import VideoGrid from '../components/VideoGrid'
import Footer from '../components/Footer'
import StatisticPart from '../components/StatisticPart'
import Clients from '../components/Clients'

function Home() {
  return (

    <div>
      <Main/>
      <ServicesSection/> 
      <Clients/>
      <VideoGrid/>
    
    </div>
  )
}

export default Home