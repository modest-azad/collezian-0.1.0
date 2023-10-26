/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Notes from "./cse/notes";
export default function Branch_index({Branch_Name,Notes}) {
  var heading = "py-4 font-semibold text-xl";
  var image = " feature-image md:h-[40%] md:pt-4 flex justify-center items-center";
  var para = "para text-sm text-gray-500 ";

  return (
    <>
      <h1 className="text-center uppercase font-bold p-8 text-3xl text-gray-700">
        {Branch_Name}
      </h1>

      <div className="service w-full m-auto grid grid-rows-auto grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 p-[5%] md:px-[10%]">
        {/* content - 1  */}
        <Link href={Notes} className="feature col-span-4 max-sm:m-8 p-4 transition-all duration-300 ease-in-out bg-orange-100 text-orange-500 md:hover:shadow-xl hover:translate-y-[-1em] rounded-3xl">
          <div className={image}>
            <img
              className="w-[40%] aspect-1/1"
              src="/images/book.png"
              alt="aiBot"
            />
          </div>

          <div className="feature-content text-center ">
            <h2 className={heading}>Notes</h2>
            <p className={para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              sint fugiat totam et repudiandae error id saepe exercitationem.
              Minus consequatur nam itaque, tenetur possimus eum?
            </p>
          </div>
        </Link>

        {/* content - 2 */}
        <Link href="" className="feature col-span-4 max-sm:m-8 p-4 transition-all duration-300 ease-in-out bg-gray-100 text-gray-500 md:hover:shadow-xl hover:translate-y-[-1em] rounded-3xl">
          <div className={image}>
            <img
              className="w-[40%] aspect-1/1"
              src="/icons/book.png"
              alt="Study_Materials"
            />
          </div>
          <div className="feature-content text-center">
            <h2 className={heading}>Assignments/Practicals</h2>
            <p className={para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              sint fugiat totam et repudiandae error id saepe exercitationem.
              Minus consequatur nam itaque, tenetur possimus eum?
            </p>
          </div>
        </Link>

        {/* content - 3  */}
        <Link href="" className="feature col-span-4 max-sm:m-8 p-4 transition-all duration-300 ease-in-out bg-green-100 text-green-500 md:hover:shadow-xl hover:translate-y-[-1em] rounded-3xl">
          <div className={image}>
            <img
              className=" w-[40%] aspect-1/1"
              src="/icons/job.png"
              alt="career"
            />
          </div>

          <div className="feature-content text-center">
            <h2 className={heading}>Question Bank (PYQ)</h2>
            <p className={para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              sint fugiat totam et repudiandae error id saepe exercitationem.
              Minus consequatur nam itaque, tenetur possimus eum?
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
