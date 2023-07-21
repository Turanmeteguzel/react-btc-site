import React from 'react'
import Logo from '../assets/logo.jpg'
import '../style/footer.css'

const Footer = () => {
  return (
    <div className='w-full h-12 bg-white'>
        <div className='items-center text-center'>
            <div className='flex items items-start gap-10 '>
                <a href="https://github.com/Turanmeteguzel"><i class="hover:scale-y-150 duration-500 fa-brands fa-github fa-2xl"></i></a>
                <a href="https://www.instagram.com/turannmete/?hl=tr"> <i class="hover:scale-125 duration-500 fa-brands fa-instagram fa-2xl"></i></a>
                <a href="https://www.linkedin.com/in/turan-güzel-6383aa226/"><i class="hover:scale-x-150 duration-500 fa-brands fa-linkedin fa-2xl"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Footer
