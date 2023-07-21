import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div id='cards' className='w-full py-[10rem] px-4 bg-[#000300]'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-36 '>
            <div className=' bg-gray-400 w-full shadow-2xl p-4 my-4 flex flex-col rounded-xl hover:scale-105 duration-500'>
                <img className='w-20 mx-auto mt-[2rem]' src={Single} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>sadsadasdasdas</h2>
                <p className='text-center'>asdsadasdasdasdasdasdasd</p>
                <div className='text-center'>
                    <p>dasdasdsadas</p>
                    <p>dasdasd</p>
                    <p>dasdasdasdasdas</p>
                </div>
                <button className='w-[200px] bg-[#00df9a] mx-auto my-6 py-3 rounded-md text-black font-medium hover:scale-105 duration-500'>Start</button>
            </div>

            <div className='bg-gray-400 w-full shadow-2xl p-4 my-4 flex flex-col rounded-xl hover:scale-105 duration-500 '>
                <img className='w-20 mx-auto mt-[2rem]' src={Single} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>sadsadasdasdas</h2>
                <p>asdsadasdasdasdasdasdasd</p>
                <div>
                    <p>dasdasdsadas</p>
                    <p>dasdasd</p>
                    <p>dasdasdasdasdas</p>
                </div>
                <button className='w-[200px] bg-white mx-auto my-6 py-3 rounded-md text-black font-medium hover:scale-105 duration-500'>Start</button>
            </div>

            <div className=' bg-gray-400 w-full shadow-2xl p-4 my-4 flex flex-col rounded-xl hover:scale-105 duration-500'>
                <img className='w-20 mx-auto mt-[2rem]' src={Single} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>sadsadasdasdas</h2>
                <p className='text-center'>asdsadasdasdasdasdasdasd</p>
                <div>
                    <p>dasdasdsadas</p>
                    <p>dasdasd</p>
                    <p>dasdasdasdasdas</p>
                </div>
                <button className='w-[200px] bg-[#00df9a] mx-auto my-6 py-3 rounded-md text-black font-medium hover:scale-105 duration-500'>Start</button>
            </div>
        </div>
    </div>
  )
}

export default Cards