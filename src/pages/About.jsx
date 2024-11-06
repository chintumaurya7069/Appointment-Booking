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
    </div>
  )
}

export default About