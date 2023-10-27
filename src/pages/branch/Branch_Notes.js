/* eslint-disable @next/next/no-img-element */
import Branch_Notes_api  from "./Branch_Notes_api";
import { useState } from "react";

export default function Branch_Notes({ name }) {
  // used for state managment
  const [currentData, setData] = useState(Branch_Notes_api);
  console.log(currentData.branch);
  return (
    <>
      <div className="w-full m-auto flex flex-col items-center">
        <div>
          <h2 className="headline text-center font-bold text-2xl p-8">
            {name}
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
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 md:px-[10%] px-[5%] py-[5%]">
          {Branch_Notes_api.map((currentData) => {
          
                <div key={currentData.key} className="card flex bg-blue-100 text-center shadow rounded-xl">
                  <div className="content p-4">
                    <h2 className="font-semibold text-lg">
                      {currentData.subject_name}
                    </h2>
                    <h3 className="text-sm text-gray-700">
                      {currentData.description}
                    </h3>
                    <p className="py-2 text-sm  text-gray-700">
                      Uploads: {currentData.uploads}
                    </p>
                    <div className=" text-sm user-feedback text-gray-700 flex justify-center gap-4 cursor-pointer">
                      <div className="view-count pr-2"> 0 view</div>
                      <div className="like-count pr-2"> 0 Likes</div>
                      <div className="comment-count pr-2"> 0 Comments</div>
                    </div>
                  </div>
                </div>
           
          })}
        </div>
      </div>
    </>
  );
}
