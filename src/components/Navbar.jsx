import React from 'react'
import { brandLogo } from '../assets'

const Navbar = () => {
  return (
    <>
    <nav className='w-full h-[80px] px-20 mt-4 flex justify-between items-center'>
        <div className="logo">
            <img src={brandLogo} />
        </div>
        <div className="nav-links flex justify-center gap-8 items-center text-md font-semibold font-poppins">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>CONTACT</p>
        </div>
    </nav>
    </>
  )
}

export default Navbar
