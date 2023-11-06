/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Studying(){
    var card = "snap-center feature flex p-4 md:shadow transition-all duration-300 ease-in-out bg-[#f4f6fc] text-blue-500 md:hover:shadow-xl rounded-3xl"
    var image = "w-16 aspect-1/1 feature-image  flex justify-center items-center mx-6";
    var heading = "py-2 font-semibold text-sm";
    var para = "para text-sm text-gray-600 ";

    return (
      <div className="my-16">
      <h1 id="portal-links" className=" text-center m-auto text-xl md:text-2xl font-semibold my-4">
        Available Branch
      </h1>
      
        <div className=" service w-full m-auto grid grid-rows-auto  grid-cols-1 md:grid-cols-3 gap-4 md:gap-8  px-[5%]">
          
          <Link href="/branch/cse" className={card}>
            <div className={image}> <img  src="/icons/computer.png" alt="branch png" /></div>  
            <div className="feature-content">
              <h2 className={heading}>CSE</h2>
              <p className={para}>
              Computer Science and Engineering
              </p>
            </div>
          </Link>

          <Link href="/branch/ece" className={card}>
            <div className={image}> <img  src="/icons/electronics.png" alt="branch png" /></div>  
            <div className="feature-content">
              <h2 className={heading}>ECE</h2>
              <p className={para}>
              Electrical and Communication Engineering
              </p>
            </div>
          </Link>

          <Link href="/branch/eee" className={card}>
            <div className={image}> <img  src="/icons/eee.png" alt="branch png" /></div>  
            <div className="feature-content ">
              <h2 className={heading}>EEE</h2>
              <p className={para}>
              Elecrical and Electronics Engineering
              </p>
            </div>
          </Link>

          <Link href="/branch/ee" className={card}>
            <div className={image}> <img  src="/icons/electrical.png" alt="branch png" /></div>  
            <div className="feature-content ">
              <h2 className={heading}>EE</h2>
              <p className={para}>
              Electrical Engineering
              </p>
            </div>
          </Link>
          
          <Link href="/branch/civil" className={card}>
            <div className={image}> <img  src="/icons/civil.png" alt="branch png" /></div>  
            <div className="feature-content ">
              <h2 className={heading}>CIVIL</h2>
              <p className={para}>
              Civil Engineering
              </p>
            </div>
          </Link>
          
          <Link href="/branch/me" className={card}>
            <div className={image}> <img  src="/icons/mechanical.png" alt="branch png" /></div>  
            <div className="feature-content ">
              <h2 className={heading}>ME</h2>
              <p className={para}>
              Mechanical Engineering
              </p>
            </div>
          </Link>
    
          <Link href="/branch/me" className={card}>
            <div className={image}> <img  src="/icons/coding.png" alt="branch png" /></div>  
            <div className="feature-content ">
              <h2 className={heading}>BCA</h2>
              <p className={para}>
                Bachelor in Computer Application
              </p>
            </div>
          </Link>
         
        </div>
      </div>
    );
}