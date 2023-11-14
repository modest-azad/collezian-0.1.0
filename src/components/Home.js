/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Home = () => {
  return (
    <>
      <div className="w-full py-20 grid flex-wrap justify-center items-center">
      
        <div className="box text-center px-4 ">
          <div className="headline hidden text-zinc-800 ">Student{"'"}s</div>
          <div className="headline text-5xl md:text-6xl leading-[48px] py-8 font-black text-blue-800">
           Collezian Community
          </div>
          <p className=" Description break-words text-zinc-700 mb-10">
          &quot;The pulse of engineering student life.&quot;
          </p>
          <Link
            href="https://chat.whatsapp.com/IEzLC5bZosdE4JkjQyIIKk"
            className="  rounded-3xl ring-2 ring-green-500 bg-green-100 shadow hover:shadow-xl text-[#001e2b]  font-semibold px-4 py-3 my-8"
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
