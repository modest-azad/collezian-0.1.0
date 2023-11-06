/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Navigation from "./Navigation";
const hero = () => {
  return (
    <>
      <div className="  w-full h-[70vh] flex flex-wrap justify-center items-center ">
        <div className="box text-center p-4">
          <div className="headline text-l  text-blue-500 p-2">Student{"'"}s</div>
          <div className="headline fo text-5xl py-2 md:text-6xl font-black dark:text-gray-100">
            Collezian Community
          </div>
          <p className="Description break-words text-sm dark:text-gray-500 px-6 py-8">
          Chat with our <strong>AI</strong> and download your <strong>Engineering</strong> study materials for free.
          </p>
          <Link
            href="https://chat.whatsapp.com/IEzLC5bZosdE4JkjQyIIKk"
            className=" outline outline-1 outline-blue-700 rounded-3xl  text-blue-700 font-bold  px-6 py-4"
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
