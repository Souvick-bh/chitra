import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import BgRemover from './services/BgRemover'
import NavBar from './Components/NavBar'
import  Home  from './pages/Home'
import About from './pages/About'


function App() {
  

  return (
    <div style={{backgroundImage: `radial-gradient(circle at 0.5px 0.2px, rgba(255,255,255,0.15)0.6px, transparent 0)`,
            backgroundSize: "4px 4px",
            backgroundRepeat: "repeat",}}
     className='bg-[#0e1012] min-h-screen flex flex-col justify-items-center'>
      
      <BrowserRouter>
        <div className=''>
          <NavBar />
        </div>
        
        <Routes>
          <Route path="/chitra/" element={<Home />}></Route>
          <Route path="/chitra/about" element={<About />}></Route>
          <Route path="/chitra/bgremover" element={<BgRemover />}></Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
