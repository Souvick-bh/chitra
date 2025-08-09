import {useEffect,useRef,useState} from 'react'
import { removeBackground } from "@imgly/background-removal";
import { Avatar } from "@files-ui/react";
import loader from '../assets/images/loader.gif'

import { FaArrowLeft,FaArrowRight,FaArrowUp,FaArrowDown } from "react-icons/fa";

import * as htmlToImage from 'html-to-image';
import { toPng,toJpeg } from 'html-to-image';


function PookieShot() {
    
  const [file, setFile] = useState(null);
  const [fileCopy,setFileCopy] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);
  const [processText,setProcessText] = useState(null)

  const editor = useRef(null);
  const contentRef = useRef(null)

  const [magicCond,setMagicCond] = useState(false);
	const [content, setContent] = useState('');
  const [topVal,setTopVal] = useState(20);
  const [leftVal,setLeftVal] = useState(20);
  const [textSize,setTextSize] = useState(50);
  const [color,setColor] = useState("#FFFFFF")
  const [font,setFont] = useState("Arial");
  const [textWeight,setTextWeight] = useState(400);
  const [angle,setAngle] = useState(0);
  const [shadowSpread,setShadowSpread] = useState(10);

  function namer() {
    const list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let name_of_img = '';
    for (let i=0; i<12 ; i++) {
      name_of_img += list.charAt(Math.floor(Math.random() * list.length));
    }
    return name_of_img;
  }

  function handleSize(e) {
    setTextSize(parseInt(e.target.value));
  }
  function handleColor(event) {
    setColor(event.target.value)
  }
  function handleFont(e) {
    setFont(e.target.value);
  }
  function handleTextWeight(e) {
    setTextWeight(parseInt(e.target.value));
  }
  

  const capture = () => {
    const image_id = namer();

  htmlToImage
  .toJpeg(document.getElementById('my-node'), { quality: 1.0 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = `${image_id}.jpeg`;
    link.href = dataUrl;
    link.click();
  });
}
  
  const updateFile = (selectedFile) => {
    setFile(selectedFile);
    setFileCopy(URL.createObjectURL(selectedFile));
  }

  async function removebg()  {
        
        try {
            setMagicCond(true);
            setProcessText("Please wait...");
            const resultblob = await removeBackground(file);
            const url = URL.createObjectURL(resultblob);
            setResultUrl(url);
        } catch(error) {
        console.error(error)
        } finally {
          setMagicCond(false);
        setProcessText("Preview");
        }
  }

  useEffect(() => {
    removebg()
  },[file])

  
  
  return (
    <div className="flex min-h-screen flex-col items-center ">
      <div className=" mt-4 h-10 flex flex-col gap-15 justify-center items-center">
        <Avatar src={file} alt="Avatar" emptyLabel="Select Image" changeLabel="Change Image" onChange={updateFile} />
      </div>
      
    {fileCopy && <h2 className="text-2xl text-[#f8f9fa] inline-flex font-medium font-serif items-center text-center mt-6 mb-6">
      {magicCond && <img  src={loader} className='bg-[#ffffff] h-6 p-[1px] mr-4 items-center rounded-full' />}
      {processText}</h2> }
      {resultUrl &&<div className='flex flex-col items-center justify-center'>
        
         <div className="max-w-72 flex items-center justify-center overflow-auto border border-gray-200 rounded-4xl mb-5">
          <div className="flex flex-col justify-center w-full">
            <div id='my-node' ref={contentRef} style={{ color: "#fff" }} className='relative max-w-70 h-auto items-center'>
                    <img src={fileCopy} alt="" className='relative max-w-70 top-0 left-0' />
                    <p className={`absolute text-amber-50`} 
                     style={{ top: `${topVal}px`, left: `${leftVal}px`,fontSize: `${textSize}px`, color: color, fontFamily: `${font}`,
                      fontWeight: `${textWeight}`, transform: `rotate(${angle}deg)`, textShadow:`1px 1px ${shadowSpread}px black ` }} dangerouslySetInnerHTML={{__html: content}} />
                    <img
                        src={resultUrl}
                        alt="result"
                        className="absolute max-w-70 top-0 left-0 z-1"
                    /> 
            </div>
          </div>
        </div>

        <button className='mt-4 mb-4 text-[#ffffff] font-medium border-2 p-2 rounded-3xl cursor-pointer text-shadow-lg/90 inset-shadow-sm inset-shadow-indigo-900 active:bg-[#2c2c2c] bg-[#53c2e1]' onClick={capture}>Download</button>

        <div className='flex flex-row gap-10 m-3 mb-6 text-[#ffffff]'>
          <button className='text-[#ffffff] cursor-pointer active:text-[#545454] p-2 border-2 rounded-4xl' onClick={() => setTopVal(prev => prev - 5)}><FaArrowUp /></button>
          <button className='text-[#ffffff] cursor-pointer active:text-[#545454] p-2 border-2 rounded-4xl' onClick={() => setTopVal(prev => prev + 5)}><FaArrowDown /></button>
          <button className='text-[#ffffff] cursor-pointer active:text-[#545454] p-2 border-2 rounded-4xl' onClick={() => setLeftVal(prev => prev + 5)}><FaArrowRight /></button>
          <button className='text-[#ffffff] cursor-pointer active:text-[#545454] p-2 border-2 rounded-4xl' onClick={() => setLeftVal(prev => prev - 5)}><FaArrowLeft /></button>
        </div>

        <div className='flex flex-col items-center w-90 h-80 mb-48 rounded-4xl'>
          <input className=' mt-4 mb-4 p-2 text-center rounded-2xl border-2 border-[#ffffff] text-[#ffffff]'
           type="text" placeholder='Enter Text' value={content} onChange={(e) => setContent(e.target.value)} />

          <div>
            <span className='text-[#ffffff] mr-1 text-lg'>Text Size : </span>
            <select className='w-30 max-h-10 overflow-scroll mt-4 mb-4 p-2 border-2 bg-[#2a2a2a] border-[#ffffff] text-[#ffffff] rounded-2xl '
              value={textSize} onChange={handleSize}>
              <option value="5">5px</option>
              <option value="10">10px</option>
              <option value="15">15px</option>
              <option value="20">20px</option>
              <option value="25">25px</option>
              <option value="30">30px</option>
              <option value="35">35px</option>
              <option value="40">40px</option>
              <option value="45">45px</option>
              <option value="50">50px</option>
              <option value="55">55px</option>
              <option value="60">60px</option>
              <option value="65">65px</option>
              <option value="70">70px</option>
              <option value="75">75px</option>
              <option value="80">80px</option>
              <option value="85">85px</option>
              <option value="90">90px</option>
              <option value="95">95px</option>
              <option value="100">100px</option>
            </select>
          </div>
          
          <div>
            <span className='text-[#ffffff] mr-1 text-lg'>Text Style  : </span>
            <select className='w-30 max-h-10 overflow-scroll mt-4 mb-4 p-2 border-2 bg-[#2a2a2a] border-[#ffffff] text-[#ffffff] rounded-2xl '
              value={font} onChange={handleFont}>
                <option value="serif">serif</option>
                <option value="sans-serif">sans-serif</option>
                <option value="monospace">monospace</option>
                <option value="cursive">cursive</option>
                <option value="fantasy">fantasy</option>
                <option value="system-ui">system-ui</option>
                <option value="ui-rounded">ui-rounded</option>
                <option value="math">math</option>
                <option value="fangsong">fangsong</option>
            </select>
          </div>

          <div>
            <span className='text-[#ffffff] mr-1 text-lg'>Text Weight : </span>
            <select className='w-30 max-h-10 overflow-scroll mt-4 mb-4 p-2 border-2 bg-[#2a2a2a] border-[#ffffff] text-[#ffffff] rounded-2xl '
              value={textWeight} onChange={handleTextWeight}>
              <option value="100">Thin</option>
              <option value="200">Extra Light</option>
              <option value="300">Light</option>
              <option value="400">Normal</option>
              <option value="500">Medium</option>
              <option value="600">Semi Bold</option>
              <option value="700">Bold</option>
              <option value="800">Extra Bold</option>
              <option value="900">Black </option>
            </select>
          </div>
          
          <div className='flex justify-center gap-2 items-center mt-3 text-lg'>
            <label className='text-[#ffffff]'>Select Text Color : </label>
            <input className='w-15 rounded-2xl' type="color" value={color} onChange={handleColor}/>
          </div>

          
          <div className='flex flex-col text-[#ffffff] border-2 border-[#3c3c3c] mt-4 pr-3 pl-3 pt-2 pb-2 rounded-2xl'>
            <span className='mb-1 text-center'>Rotate</span>
            <div className='flex flex-row'>
              <div className='flex flex-col border-1 border-[#3c3c3c] p-2 items-center'>
                <span className='text-[#ffffff] mr-1 text-lg'>left</span>
                <input className='text-[#ffffff] text-center border-2 border-[#ffffff] rounded-xl' type="number" min="0" max="360"  onChange={(e) => setAngle(360-e.target.value)}/>
              </div>
              <div className='flex flex-col border-1 border-[#3c3c3c] p-2 items-center'>
                <span className='text-[#ffffff] mr-1 text-lg'>Right</span>
                <input className='text-[#ffffff] text-center border-2 border-[#ffffff] rounded-xl' type="number" min="0" max="360"  onChange={(e) => setAngle(e.target.value)}/>
              </div>
            </div>
            
          </div>
          

            

            
        </div>
       
      </div>}
    </div>
  )
}

export default PookieShot