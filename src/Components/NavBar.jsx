
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div style={{backgroundImage: `radial-gradient(circle at 0.5px 0.2px, rgba(255,255,255,0.02)0.6px, transparent 0)`,
            backgroundSize: "4px 4px",
            backgroundRepeat: "repeat",}}
     className='flex flex-col items-center gt-super-bold text-[#ffffff] font-bold font-serif text-xl pt-2 pb-4 sm:text-3xl'>
      
        <span className='flex justify-center gap-12 pb-4 pt-3 pl-15 pr-15 rounded-4xl '>

          <Link className='hover:underline active:underline hover:text-[#53c2e1] active:text-[#53c2e1] underline-offset-8 ' to="/chitra/">Home</Link>
          <Link className='hover:underline active:underline hover:text-[#53c2e1] active:text-[#53c2e1] underline-offset-8 ' to="/chitra/bgremover">Remover</Link>
          
        </span>
      
        <div className='w-screen h-[1px] bg-amber-50 text-amber-50 opacity-30'></div>

    </div>
  )
}

export default NavBar