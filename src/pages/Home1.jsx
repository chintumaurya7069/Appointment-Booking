import React from 'react'
import Header from '../components/Header'
import Speciality from '../components/Speciality'
import Doctors from '../components/Doctors'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Header/>
      <Speciality/>
      <Doctors/>
      <Banner/>
    </div>
  )
}

export default Home