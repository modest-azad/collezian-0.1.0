/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
export default function Branch_index({name, notes, syllabus, pyq }){
    var heading = " font-semibold py-2 text-xl text-[#0f0f0f]";
    var image = " feature-image md:pt-4 flex justify-center items-center";
    var para = " hidden para text-sm text-gray-700 ";
  
    return (
      <>
        <h1 className=" text-center font-bold p-8 text-3xl text-blue-600">
          {name}
        </h1>
      <hr/>
        <div className="service w-full m-auto grid grid-rows-auto grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 p-[5%] md:px-[10%]">
          {/* content - 1  */}
          <Link href={`${notes}`} className="feature col-span-4  p-4  bg-[#F4F6FC] text-gray-500 md:hover:shadow-xl rounded-3xl">
            
          <div className="text-3xl absolute text-blue-400 ring-2 ring-blue-400 rounded-full h-10 w-10 flex justify-center items-center">1</div>
            <div className={image}>
              <Image width={100} height={100}
                className="aspect-1/1"
                src="/icons/notebook.png"
                alt="notebook"
              />
            </div>
  
            <div className="feature-content text-center ">
              <h2 className={heading}>Notes</h2>
              <p className={para}>
              Comprehensive study materials and resources to help you grasp key concepts easily.
              </p>
            </div>
          </Link>
  
          {/* content - 2 */}
          <Link href={`${syllabus}`} className="feature col-span-4  p-4  bg-[#F4F6FC] text-gray-500 md:hover:shadow-xl  rounded-3xl">
            <div className="text-3xl absolute text-blue-400 ring-2 ring-blue-400 rounded-full h-10 w-10 flex justify-center items-center">2</div>
            <div className={image}>
            <Image width={100} height={100}
                className="aspect-1/1"
                src="/icons/syllabus.png"
                alt="Study_Materials"
              />
            </div>
            <div className="feature-content text-center">
              <h2 className={heading}>Syllabus</h2>
              <p className={para}>
              Access the complete syllabus of BEU, SBTE and other, to navigate through the entire course content effectively.
              </p>
            </div>
          </Link>
  
          {/* content - 3  */}
          <Link href={`${pyq}`} className="feature col-span-4  p-4  bg-[#F4F6FC] text-gray-500 md:hover:shadow-xl  rounded-3xl">
            
          <div className="text-3xl absolute text-blue-400 ring-2 ring-blue-400 rounded-full h-10 w-10 flex justify-center items-center">3</div>
            <div className={image}>
            <Image width={100} height={100}
                className="aspect-1/1"
                src="/icons/exam-color.png"
                alt="career"
              />
            </div>
  
            <div className="feature-content text-center">
              <h2 className={heading}>Question Bank (PYQ)</h2>
              <p className={para}>
              Browse through a collection of previous year&apos;s exam questions to get a better understanding of the exam pattern and question format.
              </p>
            </div>
          </Link>
        </div>
      </>
    );
  }