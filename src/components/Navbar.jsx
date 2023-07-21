import React,{useState} from 'react'
import '../style/navbar.css'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import Logo from '../assets/logo.jpg'

const Navbar = () => {

    const [nav,setNav] = useState(true)

    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <div className=' flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px] text-white'>
        <img className='logo md:w-[50px] md:h-[50px]' src={Logo} alt="" />
        <ul className='hidden md:flex'>
            <a href="#home"><li className='p-4 link'>Home</li></a>
            <a href="#anal"><li className='p-4 link'>Resources</li></a>
            <a href="#cards"><li className='p-4 link'>About</li></a>
            <a href="#contact"><li className='p-4 link'>Contact</li></a>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={24}/>:<AiOutlineMenu size={24}/>}

        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#000300]  h-full ease-in-out duration-700 ' : 'px-12 fixed left-[-100%]'}>
         <img className='logo md:w-[50px] md:h-[50px] pt-0 m-4' src={Logo} alt="" />
            <ul className='uppercase p-4'>
            <a href="#home"><li className='p-4 border-b border-gray-600'>Home</li></a>
            <a href="#anal"><li className='p-4 border-b border-gray-600'>Resources</li></a>
            <a href="#cards"><li className='p-4 border-b border-gray-600'>About</li></a>
            <a href="#contact"><li className='p-4'>Contact</li></a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
