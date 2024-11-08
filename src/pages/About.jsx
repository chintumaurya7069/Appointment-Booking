import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <h1 className='text-3xl text-center justify-center py-5'>ABOUT US</h1>
      <div className='flex gap-6 pt-5'>
        <div>
          <img className='w-[1500px]' src={assets.about_image} alt="" />
        </div>
        <div className='px-5'>
          <p>Welcome To Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis beatae deleniti, consequatur rerum accusantium excepturi exercitationem? Cum animi omnis eius quo, maiores quibusdam magni, sed quod vel repudiandae obcaecati eaque aspernatur expedita consequatur quam! Ullam aut cumque molestias soluta eum excepturi porro quod voluptas itaque, odit fugit culpa enim doloribus voluptatibus officiis accusantium sint sunt esse harum. Placeat, quae ipsam.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>Why Choose Us</p>
      </div>

      <div className='flex flex-col md:flex-row md-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY :</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, et.</p>
          </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE :</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, et.</p>
          </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, et.</p>
          </div>
      </div>
    </div>
  )
}

export default About
