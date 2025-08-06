import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom'
import mountain from "../assets/images/mountains.jpg"
import Footer from '../Components/Footer';

function Home() {

  return (
    <div>
    <div className='flex flex-col justify-between font-medium font-serif  '>

      <div className='w-screen text-amber-50 pt-6 pb-10 text-center '>
        <div className='inline-flex gap-2 sm:gap-4 text-2xl sm:text-4xl'>
          <h1 className=''>Skip the </h1>
          <h1 className='text-[#53c2e1]'><Typewriter options={{
                    strings: ["downloads","installs","setups","fuss","hassle"],
                    autoStart: true,
                    loop: true,
              }}/></h1>
        </div>
        <h1 className='text-2xl sm:text-4xl mt-6'>One click, done!</h1>
      </div>

        {/* <div className='flex flex-col md:flex-row items-center md:justify-around gap-10 mt-6 mb-6'>
                <div id='remove-bg' className='relative duration-150 ease-in-out bg-[#6C757D] rounded-2xl shadow-2xl w-70 text-center group'>
                  <div className="absolute inset-0 bg-[#495057] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-0"></div>
                  <img className='rounded-2xl object-cover transition-opacity duration-150 group-hover:opacity-20' src={mountain} alt="" />
                  <Link className='absolute inset-0 flex items-center justify-center text-xl text-shadow-lg shadow-amber-50 text-[#0a0909] text-shadow-white' to="/chitra/bgremover">
                  Remove BackGround</Link>
                </div>
        </div> */}

        <div>
          <div className='flex flex-col gap-12 items-center'>
            <Link className='text-[#ffffff] font-bold border-2 p-4 rounded-2xl cursor-pointer text-shadow-lg/90 inset-shadow-sm inset-shadow-indigo-950 active:bg-[#2c2c2c] bg-[#53c2e1]' to="/chitra/bgremover">Remove BackGround</Link>
            <Link className='text-[#ffffff] font-bold border-2 p-4 rounded-2xl cursor-pointer text-shadow-lg/90 inset-shadow-sm inset-shadow-indigo-950 active:bg-[#2c2c2c] bg-[#53c2e1]' to="/chitra/pookieshot">Text in Between</Link>
          </div>
        </div>

    </div>
    <Footer />
    </div>
  )
}

export default Home
