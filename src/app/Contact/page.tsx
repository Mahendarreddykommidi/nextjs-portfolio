'use client'
import React from 'react'
import { BackgroundBeams } from '../components/ui/background-beams'
import './Contact.css'

export default function Contact() {
  return (
    <div className=' min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative'>
        <BackgroundBeams className='absolute top-0 left-0 w-full h-full z-0'>

        </BackgroundBeams>
        <h1 className="text-md md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className='text-center mt-3 font-extralight text-[15px]' >feel free to contact us for any projects</p>

<div className='contact-section flex flex-col items-center justify-center'>
  <form action="" className='flex flex-col gap-4 text-center justify-center mt-[100px] rounded-md '>
    <input type="text" name="" id="" placeholder='enter your email'  className='w-[500px] bg-black py-3 text-center' />
    <input type="password" name="" id="" placeholder='enter your password' className='py-3 bg-black text-center' />
  
  <textarea name="" id="" placeholder='enter your message here' className='py-10 bg-black text-center'>

  </textarea>
  </form>
  <button type="submit" className='mt-3 px-4 py-2 bg-blue-500 rounded-md flex justify-start mr-[390px]'>submit</button>



</div>

</div>
      
  
  )
}
