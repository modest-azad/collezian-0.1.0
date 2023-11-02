import { useState } from "react";

const data = [{
  key : 0,
  branch:"ee",
  subject_name:"subject-1",
  describe:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus non expedita veritatis.",
  upload_date:"1 day ago",
},
{
key : 1,
branch:"cse",
subject_name:"subject-2",
describe:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus non expedita veritatis.",
upload_date:"2 day ago",

},
{
key : 2,
branch:"ee",
subject_name:"subject-3",
describe:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus non expedita veritatis.",
upload_date:"3 day ago",

},
]
export default function Branch_Notes(props) {
  // const [currentData, setData] = useState(data)
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
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 md:px-[10%] px-[5%] py-[5%]">
          {data.map((e)=>{
                <div key={`${e.key}`}  className="card flex bg-blue-100 text-center shadow rounded-xl">
                <div className="content p-4">
                  <h2 className="font-semibold text-lg">
                     {`${e.subject_name}`}
                  </h2>
                  <h3 className="text-sm text-gray-700">
                    {`${e.describe}`}
                  </h3>
                  <p className="py-2 text-sm  text-gray-700">
                    Uploads: {`${e.upload_date}`}
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
