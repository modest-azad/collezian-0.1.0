import { useState } from "react";
import Link from "next/link";
import ee_notes_api from "../../Backend/ee_notes_api";

export default function Branch_Notes(props) {
  const [currentData, setData] = useState(ee_notes_api);
  return (
    <>
      <div className="w-full min-h-screen m-auto flex flex-col items-center px-[5%]">
        
          <h2 className="w-full bg-white headline text-center text-blue-800 font-bold text-2xl py-8">
            {props.name}
          </h2>
        

        {/* contents  */}
        <div className=" w-full grid grid-cols-1 md:grid-cols-4 gap-4 ">
          { ee_notes_api.map((currentData)=>{
            
              return (
                <Link href={`${currentData.pdf_link}`} key={currentData.key} className="card flex justify-center bg-zinc-100 text-center shadow rounded-2xl transition-all duration-300 ease-in-out md:hover:shadow-xl">
                <div href={`${currentData.pdf_link}`} className="content p-4 ">
                  <h2 className="font-semibold ">
                     {currentData.subject_name}
                  </h2>
  
                  <p className="pt-4 pb-2 text-sm  text-gray-700">
                    Uploads: {currentData.upload_date}
                  </p>
                  <div className=" text-sm user-feedback text-gray-700 flex justify-center gap-4 cursor-pointer">
                    <div className="view-count pr-2">1 view</div>
                    <div className="like-count pr-2"> 0 Likes</div>
                    <div className="comment-count pr-2"> 0 Comments</div>
                  </div>
                </div>
                </Link>
              )
           
            }) }
          

        </div>
      </div>
    </>
  );
}
