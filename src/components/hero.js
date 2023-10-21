/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Navigation from "./Navigation";
const hero = () => {
  return (
    <>
      <div className=" dark:bg-black  w-full h-[80vh] flex flex-wrap justify-center items-center ">
        <div className="box text-center p-4">
          <div className="headline text-l  text-amber-500 p-2">Developed</div>
          <div className="headline text-4xl  md:text-6xl font-black dark:text-gray-100">
            For Future Engineers
          </div>
          <p className="Description break-words text-sm dark:text-gray-500 py-8">
            Valuable insights tailored exclusively for engineering students.
          </p>
          <Link
            href=""
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold  px-6 py-4  rounded-3xl "
          >
            {" "}
            coming soon{" "}
          </Link>
        </div>
      </div>
    </>
  )
};
export default hero;
