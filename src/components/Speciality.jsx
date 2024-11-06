import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div>
        <div className='py-16' id='speciality'>
            <p className='justify-center text-center text-3xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-tight'>Find by Speciality</p>
            <p className='justify-center text-center'>Simple browse through our extrensive list of trusted list of trusted doctors, <br className='hidden sm:block' />schedule your appoitmnet hassle-free</p>
        </div>
        <div className='flex sm:justify-center text-center pt-5 gap-4 w-full overflow-scroll'>
            {
                specialityData.map((item,index)=>(
                    <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                        <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                        <p>{item.speciality}</p>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Speciality