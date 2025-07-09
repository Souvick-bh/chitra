import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom'
import mountain from "../assets/images/mountains.jpg"

function Home() {

  return (
    <div className='flex flex-col lg:flex-row justify-between font-bold font-serif  '>

      <div className='w-screen text-amber-50 pt-20 pb-20 text-center border-b-2 lg:border-0 border-[#ffffff] '>
        <div className='inline-flex gap-5 text-4xl sm:text-6xl'>
          <h1 className=''>Skip the </h1>
          <h1 className='text-[#53c2e1]'><Typewriter options={{
                    strings: ["downloads","installs","setups","fuss","hassle"],
                    autoStart: true,
                    loop: true,
              }}/></h1>
        </div>
        <h1 className='text-4xl sm:text-6xl mt-6'>One click, done!</h1>
      </div>

        <div className='flex h-full gap-12 pl-6  lg:pr-6 lg: lg:border-l-2 border-[#ffffff] lg:items-center '>
                <div className='relative duration-150 ease-in-out m-5 hover:m-2 hover:w-80 hover bg-[#6C757D] rounded-2xl shadow-2xl w-70 text-center group'>
                <div className="absolute inset-0 bg-[#495057] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-0"></div>
                <img className='rounded-2xl object-cover transition-opacity duration-150 group-hover:opacity-10' src={mountain} alt="" />
                <Link className='absolute inset-0 flex items-center justify-center text-xl text-shadow-lg shadow-amber-50 text-[#0a0909] text-shadow-white' to="/chitra/bgremover">
                Remove BackGround</Link></div>
        </div>
    </div>
  )
}

export default Home