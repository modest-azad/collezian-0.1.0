/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Studying(){
    var card = "feature flex items-center p-4 transition-all duration-300 ease-in-out bg-[#f4f6fc] hover:shadow-xl text-gray-700  rounded-3xl"
    var image = "w-16 aspect-1/1 feature-image  flex justify-center items-center mx-6";
    var heading = "py-2 font-semibold text-sm";
    var para = "para hidden text-sm text-gray-600 ";

    return (
      <div className="my-20">
      <h1 id="portal-links" className=" uppercase text-xl md:text-2xl text-center font-semibold m-auto my-4 py-2">
        Engineering Branch 
      </h1>
      
      
        <div className=" service w-full m-auto grid grid-rows-auto  grid-cols-1 md:grid-cols-3 gap-4 md:gap-8  px-[5%]">
          
          <Link href="/branch/cse" className={card}>
            <div className={image}> <img  src="/icons/coding.png" alt="branch png" /></div>  
            <div className="feature-content">
              <h2 className={heading}>Computer Science and Engineering</h2>
            </div>
          </Link>

          <Link href="/branch/ece" className={card}>
            <div className={image}> <img  src="/icons/electronics.png" alt="branch png" /></div>  
            <div className="feature-content">
              <h2 className={heading}>Electronics and Communication Engineering</h2>
              <p className={para}>
              Electronics and Communication Engineering
              </p>
            </div>
          </Link>

          <Link href="/branch/eee" className={card}>
            <div className={image}> <img  src="/icons/eee.png" alt="branch png" /></div>  
            <div className="feature-content ">
              <h2 className={heading}>Elecrical and Electronics Engineering</h2>
              <p className={para}>
              Elecrical and Electronics Engineering
              </p>
            </div>
          </Link>

          <Link href="/branch/ee" className={card}>
            <div className={image}> <img  src="/icons/electrical.png" alt="branch png" /></div>  
            <div className="feature-content ">
              <h2 className={heading}>Electrical Engineering</h2>
              <p className={para}>
              Electrical Engineering
              </p>
            </div>
          </Link>
          
          <Link href="/branch/civil" className={card}>
            <div className={image}> <img  src="/icons/civil.png" alt="branch png" /></div>  
            <div className="feature-content ">
              <h2 className={heading}>Civil Engineering</h2>
              <p className={para}>
              Civil Engineering
              </p>
            </div>
          </Link>
          
          <Link href="/branch/me" className={card}>
            <div className={image}> <img  src="/icons/mechanical.png" alt="branch png" /></div>  
            <div className="feature-content ">
              <h2 className={heading}>Mechanical Engineering</h2>
              <p className={para}>
              Mechanical Engineering
              </p>
            </div>
          </Link>
    
      
         
        </div>
      </div>
    );
}