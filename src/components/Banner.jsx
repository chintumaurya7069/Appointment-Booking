import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10'>
           {/** -----------------left-------------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight'>Book Appoitment <br />With 100+ trusted Doctords</h1>
                <button onClick={()=>navigate('/login',scrollTo(0,0))} className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Create account
                </button>
            </div>
            {/*-------Right----------*/}
            <div className='md:w-1/2 relative lg:w-[370px]'>
                <img className='w-full absolute bottom-0 right-0 ax-w-md' src={assets.appointment_img} alt="" />
            </div>
        </div>
    )
}

export default Banner