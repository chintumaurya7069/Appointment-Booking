import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'


const Footer = () => {
    const navigate = useNavigate();

    return (
        <>
        <div className='flex items-center justify-between text-sm py-4 mb-5'>
            
            
            <div className='w-1/3'>
                <img className='w-44 cursor-pointer' src={assets.logo} alt='logo' />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptates magnam eligendi commodi repellendus, temporibus quo perspiciatis eaque quod a animi numquam fuga fugit incidunt officiis deleniti sequi enim. In.</p>
            </div>



            <div className='px-6 w-1/3 justify-center text-start'>
            <p className='text-2xl py-2'>COMPANY</p>
                <ul className=''>
                    <NavLink to={'/'}>
                        <li className='py-1'>HOME</li>
                    </NavLink>
                    <NavLink to={'/doctors'}>
                        <li className='py-1'>ALL DOCTORS</li>
                    </NavLink>
                    <NavLink to={'/policies'}>
                        <li className='py-1'>PRIVACY POLICIES</li>
                    </NavLink>
                    <NavLink to={'/contact'}>
                        <li className='py-1'>Contact</li>
                    </NavLink>
                </ul>

            </div>



            <div className='w-1/3'>
            <p className='text-2xl'>GET IN TOUCH</p>
                <ul className=''>
                    <li>+1-212-456-7890</li>
                    <li>chintumaurya7069@gmail.com</li>
                </ul>

            </div>
          
        </div>
        <div className='w-full'>
             <hr />
                <p className='text-center py-3'>copyright © 2024 chintu - All Right Reserved 
                </p>
            </div>
        </>
        
    )
}

export default Footer