import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div id='anal' className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      
      <img className='w-[500px] mx-auto my-4' src={Laptop}/>
      
      <div className='flex flex-col justify-center sm:items-center sm:text-center '>
            <p className='uppercase text-[#00dfa0] font-bold py-1'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='py-2 md:text-4xl font-bold sm:text-3xl text-2xl'>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti delectus quibusdam nostrum sint exercitationem necessitatibus, esse minus saepe, vero est veritatis culpa nisi ipsa! Quaerat officiis obcaecati, eligendi ipsam beatae, eum aspernatur a totam excepturi id odio aut nulla aperiam, ullam pariatur exercitationem in libero repellat officia! Atque, ducimus dolorem.</p>
            <button className='hover:scale-105 duration-500 w-[200px] bg-black mx-auto my-6 py-3 rounded-md text-[#00df9a] font-medium'>Get Started</button>
      </div>
      </div>
    </div>
  )
}

export default Analytics