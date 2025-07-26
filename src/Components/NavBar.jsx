
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='flex flex-col items-center gt-super-bold text-[#f8f9fa] font-medium font-serif text-xl pt-8 sm:text-3xl'>
      
        <div className='flex justify-center gap-12 pb-6 w-screen'>

          <Link className='hover:underline hover:text-[#53c2e1] active:text-[#53c2e1] underline-offset-8 ' to="/chitra/">Home</Link>
          <Link className='hover:underline hover:text-[#53c2e1] active:text-[#53c2e1] underline-offset-8 ' to="/chitra/bgremover">Remover</Link>
          {/* <Link className='text-[#6c757d] cursor-not-allowed' to="/chitra/about">About</Link> */}
          {/* <Link className='text-[#6c757d] cursor-not-allowed' to="/chitra/">Report</Link> */}
        </div>
      
        

    </div>
  )
}

export default NavBar