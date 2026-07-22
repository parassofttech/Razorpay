import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../home/HeroSection'
import AcceptPayments from '../home/AcceptPayments'
import Functionality from '../home/Functionality'
import PaymentGateway from '../home/PaymentGateway'
import MakePayouts from '../home/MakePayouts'
import BusinessBanking from '../home/BusinessBanking'
import Ecommmerce from '../home/Ecommmerce'
import Feature from '../home/Feature'
import Footer from '../home/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      {/* <PaymentGateway/>
      
      <Functionality/>
      <AcceptPayments/>
      <MakePayouts/>
      <BusinessBanking/>
      <Ecommmerce/>
      <Feature/>
      <Footer/> */}
    </div>
  )
}

export default Home
