/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Navigation from "./Navigation";
const Hero = () => {
  return (
    <>
      <div className="  w-full h-[80vh] grid flex-wrap justify-center items-center">
      
        <div className="box text-center ">
          <div className="headline text-sm text-gray-700 ">Student{"'"}s</div>
          <div className="headline font-[calligraphy] text-6xl py-4 font-black text-[#050a30]">
            Collezian Community
          </div>
          <p className="Description break-words text-sm text-gray-700 mb-10">
          Chat with <strong>AI</strong> and access your <strong>Engineering</strong> study materials for free.
          </p>
          <Link
            href="https://chat.whatsapp.com/IEzLC5bZosdE4JkjQyIIKk"
            className="  rounded-3xl bg-blue-400 text-[#001e2b] hover:shadow-xl  font-bold px-6 py-4"
          >
            {" "}
            Join Community{" "}
          </Link>
        </div>
      </div>
    </>
  )
};
export default Hero;
