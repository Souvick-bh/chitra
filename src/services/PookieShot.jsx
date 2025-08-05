import {useEffect,useRef,useState} from 'react'
import { removeBackground } from "@imgly/background-removal";
import { Avatar } from "@files-ui/react";
import loader from '../assets/images/loader.gif'

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

import JoditEditor from 'jodit-react';
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

  const capture = () => {

  htmlToImage.toJpeg(document.getElementById('my-node'), { quality: 0.95 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'new-image.jpeg';
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
            setProcessText("Doing Magic");
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
                    <p className={`absolute text-amber-50`} style={{ top: `${topVal}px`, left: `${leftVal}px` }} dangerouslySetInnerHTML={{__html: content}} />
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

        <div className='flex w-90 mb-48 rounded-4xl'>
            <JoditEditor ref={editor} value={content} 
              onChange={(newContent) => setContent(newContent)}
            />

            
        </div>
       
      </div>}
    </div>
  )
}

export default PookieShot