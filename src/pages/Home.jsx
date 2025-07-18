import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom'
import mountain from "../assets/images/mountains.jpg"
import Footer from '../Components/Footer';

function Home() {

  return (
    <div>
    <div className='flex flex-col justify-between font-bold font-serif  '>

      <div className='w-screen text-amber-50 pt-10 pb-10 text-center border-b-2 border-[#ffffff] '>
        <div className='inline-flex gap-5 text-3xl sm:text-5xl'>
          <h1 className=''>Skip the </h1>
          <h1 className='text-[#53c2e1]'><Typewriter options={{
                    strings: ["downloads","installs","setups","fuss","hassle"],
                    autoStart: true,
                    loop: true,
              }}/></h1>
        </div>
        <h1 className='text-3xl sm:text-5xl mt-6'>One click, done!</h1>
      </div>

        <div className='flex flex-col md:flex-row items-center md:justify-around gap-10 mt-6 mb-6'>
                <div id='remove-bg' className='relative duration-150 ease-in-out bg-[#6C757D] rounded-2xl shadow-2xl w-70 text-center group'>
                  <div className="absolute inset-0 bg-[#495057] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-0"></div>
                  <img className='rounded-2xl object-cover transition-opacity duration-150 group-hover:opacity-20' src={mountain} alt="" />
                  <Link className='absolute inset-0 flex items-center justify-center text-xl text-shadow-lg shadow-amber-50 text-[#0a0909] text-shadow-white' to="/chitra/bgremover">
                  Remove BackGround</Link>
                </div>

                <div id='between-text' className='h-40 w-70 rounded-2xl bg-amber-500'>

                </div>
        </div>
        
    </div>
    <Footer />
    </div>
  )
}

export default Home
