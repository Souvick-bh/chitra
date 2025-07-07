import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import BgRemover from './services/BgRemover'
import NavBar from './NavBar'
import  Home  from './pages/Home'
import Upcomings from './pages/Upcomings'
import About from './pages/About'
import Report from './pages/Report'

function App() {
  

  return (
    <div className='bg-[#0e1012] h-full flex flex-col justify-items-center'>
      
      <BrowserRouter>
        <div className=''>
          <NavBar />
        </div>
        
        <Routes>
          <Route path="/chitra/" element={<Home />}></Route>
          <Route path="/chitra/Upcomings" element={<Upcomings />}></Route>
          <Route path="/chitra/about" element={<About />}></Route>
          <Route path="/chitra/report" element={<Report />}></Route>
          <Route path="/chitra/bgremover" element={<BgRemover />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
