import { useState } from "react";
import Link from "next/link";
import notes_api from "../../Backend/notes_api";

export default function Branch_Notes(props) {
  const [currentData, setData] = useState(notes_api);
  return (
    <>
      <div className="w-full m-auto flex flex-col items-center">
        <div>
          <h2 className="headline text-center font-bold text-2xl p-8">
            {props.name}
          </h2>
        </div>

        <div className="search-filter-bar sticky top-10">
          {/* search box  */}
          <input
            type="text"
            className="
        search-box rounded-3xl w-40 transition-w delay-0 duration-700 ease-in-out hover:w-80 text-sm text-center "
            placeholder="Search Your Notes"
          />
        </div>

        {/* contents  */}
        <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-10 md:px-[10%] px-[5%] py-[5%]">
          { notes_api.map((currentData)=>{
            if(currentData.branch === "ee"){
              return (
                <div key={currentData.key} className="card flex bg-blue-100 text-center shadow rounded-xl transition-all duration-300 ease-in-out hover:translate-y-[-1em]">
                <Link href={currentData.link} className="content p-4 ">
                  <h2 className="font-semibold text-lg">
                     {currentData.subject_name}
                  </h2>
                  <h3 className="text-sm text-gray-700">
                    {currentData.describe}
                  </h3>
                  <p className="py-2 text-sm  text-gray-700">
                    Uploads: {currentData.upload_date}
                  </p>
                  <div className=" text-sm user-feedback text-gray-700 flex justify-center gap-4 cursor-pointer">
                    <div className="view-count pr-2">1 view</div>
                    <div className="like-count pr-2"> 0 Likes</div>
                    <div className="comment-count pr-2"> 0 Comments</div>
                  </div>
                </Link>
                </div>
              )
            }
            }) }
          

        </div>
      </div>
    </>
  );
}
