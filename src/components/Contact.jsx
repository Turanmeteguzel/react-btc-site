import React from 'react'
import '../style/contact.css'

const Contact = () => {
  return (
    <div id='contact' className='w-full py-16 bg-white pb-28'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 sm:pt-24'>
            <h1 className=' md:text-4xl m-4 sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize</h1>
            <p className='m-4'>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
            <div className='flex form'>
                <input className='i' type="text" placeholder='Name Surname' />
                <input className='i' type="email" placeholder='Enter Email' />
                <textarea className='i' rows={10} placeholder='Write your message' name='message'></textarea>
                <button className=' hover:scale-105 duration-500 w-[200px] bg-black mx-auto my-6 py-3 rounded-md text-[#00df9a] font-medium'>Notify Me</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
