import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='flex flex-col items-center gt-super-bold text-[#f8f9fa] font-bold font-serif text-xl pt-8 sm:text-3xl'>
      
        <div className='flex justify-center gap-12 border-t-2 border-b-2 border-[#ffffff] pt-6 pb-6 w-screen'>
          <Link className='hover:underline hover:text-[#dc9239] underline-offset-8 ' to="/chitra/">Home</Link>
          <Link className='text-[#6c757d] cursor-not-allowed' to="/chitra/">Upcomings</Link>
          <Link className='text-[#6c757d] cursor-not-allowed' to="/chitra/">About</Link>
          <Link className='text-[#6c757d] cursor-not-allowed' to="/chitra/">Report</Link>
        </div>
      
        

    </div>
  )
}

export default NavBar