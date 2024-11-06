import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const [filterDoc, setfilterDoc] = useState([])
  const { speciality } = useParams()

  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setfilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }
    else {
      setfilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])


  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist. </p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-1.5 py-1.5 pr-16 border border-gray-300 rounded transition transition-all cursor-pointer`}>General Physician</p>
          <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-1.5 py-1.5 pr-16 border border-gray-300 rounded transition transition-all cursor-pointer`}>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-1.5 py-1.5 pr-16 border border-gray-300 rounded transition transition-all cursor-pointer`}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-1.5 py-1.5 pr-16 border border-gray-300 rounded transition transition-all cursor-pointer`}>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-1.5 py-1.5 pr-16 border border-gray-300 rounded transition transition-all cursor-pointer`}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-1.5 py-1.5 pr-16 border border-gray-300 rounded transition transition-all cursor-pointer`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
        {
        filterDoc.map((item, index) => (
          <div onClick={() => navigate(`/appoitment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
            <img className='bg-blue-50' src={item.image} alt="" />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p> <p>Available</p>
              </div>
              <h2 className='text-start text-gray-900 text-lg font-medium'>{item.name}</h2>
              <p className='text-start text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))
      }
        </div>
      </div>
    </div>
  )
}

export default Doctors