import React from 'react'
import Featured from '../../components/featured/featured';
import FeaturedProperties from '../../components/featuredProperties/FeacherProperties';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/header'
import MailList from '../../components/mailList/mailList';
import Navbar from '../../components/navbar/navbar'
import PropertyList from '../../components/property/propertyList';
import './home.css';
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
       <h1 className='homeTitle'>Browse by property type</h1>
         <PropertyList />
         <h1 className="homeTitle">Homes guests love</h1>
         <FeaturedProperties />
          <MailList />   
          <Footer />   
      </div>
    </div>
  )
}

export default HomePage