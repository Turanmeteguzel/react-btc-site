import React from 'react'
import '../style/hero.css'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div id='home' className='text-white'>
        <div className=' max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className=' text-green-600 md:opacity-75 md:text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className=' md:text-7xl sm:text-6xl text-4xl md:py-6'>Grow with data.</h1>
            <div className='flex justify-center items-center pt-3'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-3'>Fast, flexible financing for</p>
                <Typed className='md:text-5xl sm:text-4xl text-3xl font-bold md:pl-4 pl-4 text-slate-700 '
                strings={['BTC','BBC','SASS']} typeSpeed={200} backSpeed={200} loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <button className=' hover:scale-105 duration-500 w-[200px] bg-[#00df9a] mx-auto my-6 py-3 rounded-md text-black font-medium'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero