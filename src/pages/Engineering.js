/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Branch = [
  {
    name: "Computer Science and Engineering",
    icon: "/icons/coding.png",
    link: "/branch/cse"
},
  {
    name: "Electronics and Communication Engineering",
    icon: "/icons/electronics.png",
    link: "/branch/ece"
},
  {   
    name: "Elecrical and Electronics Engineering",
    icon: "/icons/eee.png",
    link: "/branch/eee"
},
  {   
    name: "Elecrical Engineering",
    icon: "/icons/electrical.png",
    link: "/branch/ee"
},
  {   
    name: "Civil Engineering",
    icon: "/icons/civil.png",
    link: "/branch/civil"
},
{   
  name: "Mechanical Engineering",
  icon: "/icons/mechanical.png",
  link: "/branch/me"
},

]

export default function Engineering(){
  const [data, setData] = useState(Branch);

    var card = "feature flex items-center p-4 transition-all duration-300 ease-in-out hover:ring-1  ring-blue-400 bg-gray-100 hover:bg-blue-100 shadow hover:shadow-xl text-gray-700  rounded-3xl"
    var image = "w-16 aspect-1/1 feature-image  flex justify-center items-center mx-6";
    var heading = "py-2 text-[#0f0f0f] font-semibold ";
    var para = "para hidden text-sm text-gray-600 ";

    return (
      <div className="h-full">
      <h1 id="portal-links" className=" text-blue-600 max-md:text-center text-2xl text-center font-semibold m-auto my-4 py-2">
        Choose Branch 
      </h1>
    
        <div className=" service w-full m-auto grid grid-rows-auto  grid-cols-1 md:grid-cols-3 gap-6 md:gap-8  px-[5%]">
          
          {
              Branch.map((data)=>{
                return (
                  <Link key={data} href={data.link} className={card}>
                  <div className={image}> <img  src={data.icon} alt="branch png" /></div>  
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