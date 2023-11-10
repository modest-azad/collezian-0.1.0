/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Home = () => {
  return (
    <>
      <div className="w-full py-20 grid flex-wrap justify-center items-center">
      
        <div className="box text-center ">
          <div className="headline text-zinc-700 ">Welcome</div>
          <div className="headline font-serif text-4xl md:text-5xl leading-10 py-8 font-bold text-blue-800">
            Developed for Student
          </div>
          <p className="Description break-words text-zinc-700 mb-10">
          Study and Chat with <span className="text-blue-600">G.O.L.U</span> AI and access your <span className="text-blue-600">Engineering</span> study materials for free.
          </p>
          <Link
            href="https://chat.whatsapp.com/IEzLC5bZosdE4JkjQyIIKk"
            className="  rounded-3xl ring-2 ring-green-500 bg-green-100 shadow hover:shadow-xl text-[#001e2b]  font-semibold px-4 py-4 my-8"
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