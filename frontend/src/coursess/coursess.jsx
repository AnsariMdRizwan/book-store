import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Courses from '../components/Courses'

const coursess = ({ setSearchQuery, searchQuery }) => {

  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <div >
        <Courses searchQuery={searchQuery} />
      </div>
      <Footer />
    </>
  )
}

export default coursess
