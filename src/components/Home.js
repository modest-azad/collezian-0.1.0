/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
const Home = () => {
  return (
    <>
      <div className="w-full  py-20 grid flex-wrap justify-center items-center">
      
        <div className="box text-center px-4 ">
          <div className="headline text-zinc-800 ">Student{"'"}s</div>
          <div className="headline text-5xl md:text-6xl leading-[48px] py-8 font-black text-zinc-800">
           Collezian Community
          </div>
          <p className="hidden Description break-words text-zinc-600 mb-10">
          &quot;The pulse of engineering life.&quot;
          </p>
          <Link href="https://chat.whatsapp.com/IEzLC5bZosdE4JkjQyIIKk"
            className="flex m-auto w-max rounded-3xl  ring-2 ring-blue-600 bg-blue-200 shadow hover:shadow-xl text-[#001e2b]  font-semibold px-4 py-3 my-8"
          >           
            <Image className="mx-1 " src="/icons/users-2.svg" width={20} height={20} alt="upload"/>
            Join Community{" "}
           
          </Link>
        
        </div>
      </div>
    </>
  )
};
export default Home;
