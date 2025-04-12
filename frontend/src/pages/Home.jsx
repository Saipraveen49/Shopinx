import React from 'react'
import Hero from '../components/Hero'
import Advantage from '../components/Advantage'
import PopularProducts from '../components/PopularProducts'
import FeaturedCategories from '../components/FeaturedCategories'
import LimitedTimeOffers from '../components/LimitedTimeOffers'
import OffersBanner from '../components/OffersBanner'
import NewArrivals from '../components/NewArrivals'
import CategoryIcons from '../components/CategoryIcons'

const Home = () => {
  return (
    <div>
      <Hero/>
      <CategoryIcons/>
      <NewArrivals/>
      <PopularProducts/>
      <Advantage/>
      
      <LimitedTimeOffers/>
      <OffersBanner/>
      <FeaturedCategories/>
      
    </div>
  )
}

export default Home
