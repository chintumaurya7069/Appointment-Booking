import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home1.jsx'
import { MyAppoitments } from './pages/MyAppoitments.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Doctors from './pages/Doctors.jsx'
import MyProfile from './pages/MyProfile.jsx'
import Login from './pages/Login.jsx'
import Appoitmnet from './pages/Appoitmnet.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/my-apoitmnet' element={<MyAppoitments/>}/>
        <Route path='/appoitment/:docId' element={<Appoitmnet/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/profile' element={<MyProfile/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
      </div>
  )
}

export default App