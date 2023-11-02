/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Navigation from "./Navigation";
const hero = () => {
  return (
    <>
      <div className=" dark:bg-black  w-full min-h-[80vh] flex flex-wrap justify-center items-center ">
        <div className="box text-center p-4">
          <div className="headline text-l  text-blue-500 p-2">Collezian™</div>
          <div className="headline text-5xl py-2 md:text-6xl font-black dark:text-gray-100">
            Engineering with AI
          </div>
          <p className="Description break-words text-sm dark:text-gray-500 px-6 py-8">
          Chat with our <strong>AI</strong> and download your <strong>Engineering</strong> study materials for free.
          </p>
          <Link
            href=""
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold  px-6 py-4  rounded-3xl "
          >
            {" "}
            Join Community{" "}
          </Link>
        </div>
      </div>
    </>
  )
};
export default hero;
