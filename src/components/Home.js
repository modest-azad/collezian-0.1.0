/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Navigation from "./Navigation_bar";
const Home = () => {
  return (
    <>
      <div className="w-full py-20 grid flex-wrap justify-center items-center">
      
        <div className="box text-center ">
          <div className="headline text-zinc-700 ">Student{"'"}s</div>
          <div className="headline  text-5xl py-8 font-black text-blue-800">
            Collezian Community
          </div>
          <p className="Description break-words text-zinc-700 mb-10">
          Study and Chat with <strong>G.O.L.U.</strong> AI and access your <strong>Engineering</strong> study materials for free.
          </p>
          <Link
            href="https://chat.whatsapp.com/IEzLC5bZosdE4JkjQyIIKk"
            className="  rounded-3xl ring-2 ring-blue-500 bg-blue-100 shadow hover:shadow-xl text-[#001e2b]  font-bold px-6 py-4 my-8"
          >
            {" "}
            Join Community{" "}
          </Link>
        
        </div>
      </div>
    </>
  )
};
export default Home;
