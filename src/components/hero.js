/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Navigation from "./Navigation";
const hero = () => {
  return (
    <>
      <div className=" dark:bg-black  w-full min-h-[70vh] flex flex-wrap justify-center items-center ">
        <div className="box text-center p-4">
          <div className="headline text-l  text-amber-500 p-2">Collezian™</div>
          <div className="headline text-4xl  md:text-6xl font-black dark:text-gray-100">
            Engineering with AI
          </div>
          <p className="Description break-words text-sm dark:text-gray-500 py-8">
          Chat with our <strong>AI</strong> and download your <strong>Engineering</strong> study materials for free.
          </p>
          <Link
            href=""
            className=" bg-green-500 hover:bg-green-700 text-white font-bold  px-6 py-4  rounded-3xl "
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
