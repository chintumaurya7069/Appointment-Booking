import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <h1 className='text-3xl text-center justify-center py-5'>CONTACT US</h1>
      <div className='flex gap-6 pt-5'>
        <div>
          <img className='w-[1500px]' src={assets.contact_image} alt="" />
        </div>
        <div className='px-5'>
          <div>
            <p>OUR OFFICE</p>
            <p>412 raj-victoria <br /> adajan gam surat, Gujarat</p>
          </div>
          <div>
            <p>Tel: +91 9106496387</p>
            <p>Email: chintumaurya7069@gmail.com</p>
          </div>
        </div>
        <div>
          <h1>CAREERS AT PASV</h1>
          <p>Learn more about our teams and job openings.</p>
        </div>
        <div>
          <button>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact