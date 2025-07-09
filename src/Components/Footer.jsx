import React from 'react'
import { FaSquareXTwitter,FaGithub,FaDiscord,FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className='border-t-2 border-[#ffffff] flex flex-col  '>

        <div className='flex items-center justify-center gap-10 m-12'>
            <input className='h-30 w-100 bg-[#53c2e1] rounded-2xl text-center font-bold font-serif text-xl' type="text" placeholder='Not Yet Functional'/>
            <button className='pt-3 pb-3 pl-6 pr-6 duration-150 ease-in-out bg-[#ffffff] cursor-pointer hover:border-[#ffffff] hover:bg-[#000000]
             hover:text-[#dc9239] font-bold font-serif text-center text-2xl rounded-2xl border-2 border-[#000000] shadow-xl/30 shadow-orange-500/50 '>Send</button>
        </div>

        <div className='flex flex-col ml-25 justify-items-start'>
            <h1 className='text-[#ffffff] text-3xl font-bold font-serif'>Contact</h1>
            <h2 className='text-[#ffffff] text-xl font-bold font-serif'>souvickb30@gmail.com</h2>
        </div>

        <div className='flex items-center justify-center'>
        <div className='flex m-12 justify-around bg-[#6c757d] opacity-30 p-3 rounded-4xl text-3xl w-xs'>
            
            <FaSquareXTwitter href='https://x.com/SouvickBho17054' className='cursor-pointer text-amber-50 hover:text-[#000000]' />
            <FaGithub href='https://github.com/Souvick-bh' className='cursor-pointer text-amber-50 hover:text-[#000000]'/>
            <FaDiscord href='' className='cursor-pointer text-amber-50 hover:text-[#000000]'/>
            <FaInstagram className='cursor-pointer text-amber-50 hover:text-[#000000]'/>

        </div>
        </div>
    </div>
  )
}

export default Footer