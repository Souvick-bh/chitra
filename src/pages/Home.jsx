import React from 'react'
import { Link } from 'react-router-dom'
import mountain from "../assets/images/mountains.jpg"

function Home() {
  return (
    <div className='flex flex-col items-center font-bold font-serif text-lg'>

        <div className='flex gap-12 pt-10'>
                <div className='relative duration-150 ease-in-out m-4 hover:m-2 hover:w-80 hover bg-[#6C757D] rounded-2xl shadow-2xl w-70 text-center group'>
                <div className="absolute inset-0 bg-[#495057] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-0"></div>
                <img className='rounded-2xl object-cover transition-opacity duration-150 group-hover:opacity-0' src={mountain} alt="" />
                <Link className='absolute inset-0 flex items-center justify-center text-xl text-shadow-lg shadow-amber-50 text-[#0a0909] text-shadow-white' to="/chitra/bgremover">
                Remove BackGround</Link></div>
        </div>
    </div>
  )
}

export default Home