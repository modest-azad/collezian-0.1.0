/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navigation_bar() {
const [currentState, setState] = useState("hidden");
  
const hamburger = ()=>{
      if(currentState != "hidden"){
        setState("hidden")
      }
      else { setState("visible")}
      
      console.log("Founder and Developer by @modest_azad")
    }
  return (
    <>
<nav className="bg-zinc-100 sticky top-0 w-full center py-3 px-4 ">
    <div className="flex flex-wrap justify-between items-center mx-auto ">
        <Link href="/" className="flex items-center">
            <Image width={50}  height={50}  src="/logo/Collezian_DARK.png" className=" mr-3 rounded-full " alt="Logo" />
            <span className=" self-center text-xl font-semibold whitespace-nowrap text-zinc-700 ">Collezian</span>
        </Link>
        <button  data-collapse-toggle="mega-menu-full" type="button" className="inline-flex outline-none items-center p-2 w-10 h-10 justify-center text-sm text-[#050A30] rounded-xl md:hidden light:light:hover:bg-gray-700 " 
        aria-controls="mega-menu-full" aria-expanded="false" onClick={hamburger}>
            <svg id="hambuger" className="w-full h-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        
        <div id="mega-menu-full" className={`" relative items-center justify-between  ${currentState} w-full md:flex md:w-auto "`}>
            <ul className="transition text-zinc-700 delay-0 duration-300 ease-in-out flex  flex-col p-5 mt-4  max-sm:rounded-3xl md:flex-row md:space-x-8 md:mt-0  ">
                           
               <li className="max-sm:flex max-sm:justify-center">
                    <Link href="/Engineering" className="flex  py-2 pl-3 pr-4  rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-blue-500 md:light:hover:bg-transparent light:border-gray-700">
                    <Image className="mx-1 " src="/icons/library.svg" width={20} height={20} alt="upload"/>
                      Study Material</Link>
                </li>
                <li className="max-sm:flex max-sm:justify-center">
                    <Link href="https://chat.whatsapp.com/DPyHjemxvt17fbhSFMIVYw" className="flex py-2 pl-3 pr-4  rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-blue-500 md:light:hover:bg-transparent light:border-gray-700">
                    <Image className="mx-1 " src="/icons/map.svg" width={20} height={20} alt="upload"/>
                        Roadmaps</Link>
                </li>
                <li className="max-sm:flex max-sm:justify-center">
                    <Link href="#" className="flex py-2 pl-3 pr-4  rounded-xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 light:text-white md:light:hover:text-blue-500 light:hover:bg-gray-700 light:hover:text-blue-500 md:light:hover:bg-transparent light:border-gray-700">
                    <Image className="mx-1 " src="/icons/lightbulb.svg" width={20} height={20} alt="upload"/>
                        Project Ideas</Link>
                </li>
                               
                
            </ul>

            <hr/>

            <div className="social-icons flex justify-center max-sm:m-4 px-2">
            <Link  href="/contribution" className="flex ring-2 ring-green-600 bg-green-200 text-zinc-800 shadow hover:shadow-xl font-semibold py-2 px-4 rounded-3xl ">
                    <Image className="mx-1" src="/icons/upload-cloud.svg" width={20} height={20} alt="upload"/>
                    Contribute
                </Link>
        </div>
        </div>
         
    </div>
   
</nav>
    
    </>
  );
}
