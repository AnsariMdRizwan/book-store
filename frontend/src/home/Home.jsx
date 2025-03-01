import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freecontent from '../components/Freecontent'
import Footer from '../components/Footer'

const Home = ({ setSearchQuery, searchQuery }) => {
  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <Banner />
      <Freecontent searchQuery={searchQuery} />
      <Footer />
    </>
  )
}

export default Home
