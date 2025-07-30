import React from 'react'
import { FaSquareXTwitter,FaGithub,FaDiscord,FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className=' flex flex-col justify-center items-center mt-10 '>

        <div className="flex flex-row font-medium text-lg md:text-3xl mb-40">
          <h1 className="pl-2 pr-5 text-amber-50">The Dev : Souvick Bhowmick</h1>
          <div className="flex flex-row justify-center items-center gap-4">
              <a href='https://x.com/SouvickBho17054'>
                  <FaSquareXTwitter  className='cursor-pointer text-amber-50 active:text-[#717273]' />
              </a>
              <a href='https://github.com/Souvick-bh'>
                  <FaGithub className='cursor-pointer text-amber-50 active:text-[#717273]'/>
              </a>
              <a href="https://www.instagram.com/__souvick_bhowmick__/">
                  <FaInstagram className='cursor-pointer text-amber-50 active:text-[#717273]'/>
              </a>
          </div>
                    
        </div>
    </div>
  )
}

export default Footer