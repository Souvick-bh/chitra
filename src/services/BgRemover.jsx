
import {React,useEffect,useState} from 'react'
import { removeBackground } from "@imgly/background-removal";
import { Avatar } from "@files-ui/react";
import { Download } from "lucide-react";

function BgRemover() {
    
  const [file, setFile] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [processText,setProcessText] = useState("Remove BackGround")
    
  const updateFile = (selectedFile) => {
    setFile(selectedFile);
  }
  async function removebg()  {
    if(!file) {
      alert("Please select a file first");
      return;
    }
    if(isLoading) {
      alert("Already processing, please wait");
      return;
    }
    try {
      setIsLoading(true);
        setProcessText("Processing");
        const resultblob = await removeBackground(file);
        const url = URL.createObjectURL(resultblob);
        setResultUrl(url);
    } catch(error) {
      console.error(error)
    } finally {
      setIsLoading(false);
      setProcessText("Remove BackGround")
    }
    
  }
  
  
  return (
    <div className="flex min-h-screen flex-col items-center ">
      <div className=" mt-4 ml- flex flex-col lg:flex-row gap-15 justify-center items-center">
        <div className='w-80 flex flex-col justify-center'>
          <h2 className='text-center underline underline-offset-4 font-bold font-serif text-[#dee2e6]'>Things to keep in Mind</h2>
          <div className=' font-medium font-sans text-[#ced4da] mt-3'>
              <h3>1. It does not reduce your image resolution and size.</h3>
              <h3>2. Foreground & Background should have differentiable color contrast.</h3>
              <h3>3. The image should be in PNG or JPG format.</h3>
              <h3>4. Images having high resolution takes time to get converted.</h3>
          </div>
          
        </div>
        <Avatar src={file} alt="Avatar" emptyLabel="Select Image" changeLabel="Change Image" onChange={updateFile} />
        
      </div>
      <button className="m-10 border-2 p-4 rounded-2xl cursor-pointer text-[#f8f9fa] font-bold font-serif text-lg text-shadow-lg/90 opacity-65 hover:bg-[#53c2e1] active:border-[#071316]" onClick={removebg}>{processText}</button>
      {/* <div>
        {isLoading && <p className="text-[#ff8861] mt-1 mb-10">Processing... wait a little </p>}
      </div> */}
      {resultUrl &&<div>
        {resultUrl && <h2 className="text-2xl text-[#f8f9fa] font-medium font-serif text-center mt-2 mb-6">Result</h2>}
         <div className="space-y-2 max-w-70 flex items-center justify-center overflow-auto border border-gray-200 rounded-4xl p-5">
          <div className="flex flex-col justify-center w-full">
            <img
              src={resultUrl}
              alt="result"
              className="mx-auto max-w-[200px] h-auto object-contain"
            />
            <a
              href={resultUrl}
              download="no-background.png"
              className="flex items-center  justify-center gap-2 mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              <Download className="shrink-0 size-5" />
              Download Image
            </a>
          </div>
        </div>
       
      </div>}
    </div>
  )
}

export default BgRemover