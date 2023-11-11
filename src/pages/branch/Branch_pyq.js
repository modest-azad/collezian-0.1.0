import Link from "next/link";
import { useState } from "react";

export default function Branch_pyq({ heading }) {
  const [currentState, setState] = useState("hidden");
  
  const hamburger = ()=>{
        if(currentState != "hidden"){
          setState("hidden")
        }
        else { setState("visible")}

      }

  return (
    <>
    <div className="min-h-[80vh] flex flex-col justify-center items-center">
     
        <h2 className="font-[poppins] headline text-center text-blue-800 font-bold text-2xl">
          {heading}
        </h2>
        <Link
            href="https://chat.whatsapp.com/IEzLC5bZosdE4JkjQyIIKk"
            className=" text-center rounded-3xl ring-2 ring-green-500 bg-green-100 shadow hover:shadow-xl text-[#001e2b]  font-semibold px-4 py-4 my-8"
          >
            {" "}
            Join Whatsapp Community{" "}
          </Link>
      </div>
    </>
  );
}
