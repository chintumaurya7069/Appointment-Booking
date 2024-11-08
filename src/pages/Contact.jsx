import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <h1 className='text-3xl text-center justify-center py-5'>CONTACT US</h1>
      <div className='my-10 flex flex-col md:flex-row justify-center gap-6 pt-5 mb-20'>

        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6 px-5'>
          <p className='font-semibold text-lg text-gray-600'> OUR OFFICE</p>
          <p className='text-gray-500'> RAJ-VICTORIA ADAJAN GAM SURAT <br />Gujarat, India </p>
          <p className='text-gray-500'>Mobile no. :- 9106496387 <br />Email:chintumaurya7069@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT PASV</p>
          <p className='text-gray-500'>learn more about out teams and jobs openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore now</button>
        </div>

      </div>
    </div>
  )
}

export default Contact
