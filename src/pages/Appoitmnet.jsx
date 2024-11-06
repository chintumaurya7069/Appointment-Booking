import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appoitmnet = () => {
  const { docId } = useParams()
  const { doctors } = useContext(AppContext)


  const [docInfo, setDocInfo] = useState(null)

  const [docSlots, setDocSlots] = useState([])

  const [docIndex, setDocIndex] = useState(0)

  const [slotTime, setSlotTime] = useState('')



  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id == docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlot = async()=>{
    setDocSlots([])

    //getting current date
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      //getting date with index
      const currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      //setting end time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      //setting hours
      if(today.getDate()===currentDate.getDate()){
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours()+1 : 10)
        currentDate.setMinutes(currentDate.getMinutes > 30 ? 30 : 0)
      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while(currentDate < endTime) {
        let formattedTime = currentDate.toLocaleDateString([], { hour: '2-digit', minute: '2-digit'})

        // Add Slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time:formattedTime
        })

        // Increment current time by 30 min
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlot()
  }, [docInfo])

  useEffect(() => {
    console.log(setDocSlots());
    
    // setDocSlots()
  }, [docSlots])



  return docInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /> </p>
          <div className='flex items-center text-sm mt-1 text-gray-600 gap-3'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='border border-gray-400 rounded-full px-2 py-0.5'>{docInfo.experience}</button>
          </div>
          <div>
            <p className='flex items-center gap-3 text-m text-gray-900 pt-3'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
            <p>Appointment fee : <span className='text-m text-gray-900 font-medium'>${docInfo.fees}</span></p>
          </div>
        </div>
      </div> 

    </div>
  )
}

export default Appoitmnet