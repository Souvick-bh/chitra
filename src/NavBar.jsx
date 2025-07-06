import React from 'react'
import { Link } from 'react-router-dom'
import mountain from "./assets/images/mountains.jpg"

function NavBar() {
  return (
    <div className='flex flex-col items-center text-[#f8f9fa] font-bold font-serif text-lg pt-8 '>
        <div className='flex gap-12 '>
          <Link className='hover:underline underline-offset-8 ' to="/chitra/">Home</Link>
          <Link className='cursor-not-allowed' to="/chitra/upcomings">Upcomings</Link>
          <Link className='cursor-not-allowed' to="/chitra/about">About</Link>
          <Link className='cursor-not-allowed' to="/chitra/report">Report</Link>
        </div>
        
        

    </div>
  )
}

export default NavBar