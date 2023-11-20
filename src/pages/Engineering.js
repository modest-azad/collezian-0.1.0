/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Branch = [
  {
    name: "Computer Science and Engineering",
    icon: "/icons/laptop.svg",
    link: "/branch/cse"
},
  {
    name: "Electronics and Communication Engineering",
    icon: "/icons/cpu.svg",
    link: "/branch/ece"
},
  {   
    name: "Elecrical and Electronics Engineering",
    icon: "/icons/memory-stick.svg",
    link: "/branch/eee"
},
  {   
    name: "Elecrical Engineering",
    icon: "/icons/zap.svg",
    link: "/branch/ee"
},
  {   
    name: "Civil Engineering",
    icon: "/icons/traffic-cone.svg",
    link: "/branch/civil"
},
{   
  name: "Mechanical Engineering",
  icon: "/icons/cog.svg",
  link: "/branch/me"
},
]

export default function Engineering(){
  const [data, setData] = useState(Branch);

    var card = "feature p-6  md:p-8 flex items-center md:flex-col transition-all duration-300 ease-in-out  bg-zinc-100   md:shadow   md:hover:shadow-xl text-gray-700  rounded-3xl"
    var image = " hover:grayscale-none w-16 aspect-1/1 feature-image  flex justify-center items-center mx-6";
    var heading = "py-2 text-[#0f0f0f] ";
    var para = "para hidden text-sm text-zinc-600 ";

    return (
      <div className="min-h-screen  w-full">
      <h1 id="portal-links" className=" text-blue-600 max-md:text-center text-2xl text-center font-bold m-auto my-4 py-2">
        Choose Branch 
      </h1>
    
        <div className=" service w-full m-auto grid grid-rows-auto  grid-cols-1 md:grid-cols-3 gap-4  px-[5%]">
          
          {
              Branch.map((data)=>{
                return (
                  <Link key={data} href={data.link} className={card}>
                  <div className={image}> <Image width={40} height={40}  src={data.icon} alt="branch png" /></div>  
                  <div className="feature-content">
                    <h2 className={heading}>{data.name}</h2>
                  </div>
                </Link>
                )
              })
          }
         
        </div>


      </div>
    );
}