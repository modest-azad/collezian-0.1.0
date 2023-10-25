/* eslint-disable @next/next/no-img-element */
function services() {
  var heading = "py-4 font-semibold text-xl";
  var image = " feature-image md:h-[40%] flex justify-center items-center";
  var para = "para max-sm:text-sm text-gray-600 ";
  return (
    <>
      <div className="service w-full m-auto grid grid-rows-auto grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 p-[5%] md:p-[10%]">
        {/* feature - 1  */}
        <div className="feature col-span-4 max-sm:m-8 p-4 md:shadow transition-all duration-300 ease-in-out md:hover:bg-blue-100 md:hover:shadow rounded-3xl">
          <div className={image}>
            <img className="w-[40%] aspect-1/1" src="/icons/bot.png" alt="aiBot" />
          </div>

          <div className="feature-content text-center ">
            <h2 className={heading}>Chat with AI</h2>
            <p className={para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              sint fugiat totam et repudiandae error id saepe exercitationem.
              Minus consequatur nam itaque, tenetur possimus eum?
            </p>
          </div>
        </div>

        {/* feature - 2 */}
        <div className="feature col-span-4 max-sm:m-8 p-4 md:shadow transition-all duration-300 ease-in-out md:hover:bg-blue-100 md:hover:shadow rounded-3xl">
          <div className={image}>
            <img className="w-[40%] aspect-1/1" src="/icons/book.png" alt="Study_Materials" />
          </div>
          <div className="feature-content text-center">
            <h2 className={heading}>Free Resourses</h2>
            <p className={para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              sint fugiat totam et repudiandae error id saepe exercitationem.
              Minus consequatur nam itaque, tenetur possimus eum?
            </p>
          </div>
        </div>

        {/* feature - 3  */}
        <div className="feature col-span-4 max-sm:m-8 p-4 md:shadow transition-all duration-300 ease-in-out md:hover:bg-blue-100 md:hover:shadow rounded-3xl">
          <div className={image}>
            <img className=" w-[40%] aspect-1/1" src="/icons/job.png" alt="career" />
          </div>

          <div className="feature-content text-center">
            <h2 className={heading}>Job Updates</h2>
            <p className={para}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              sint fugiat totam et repudiandae error id saepe exercitationem.
              Minus consequatur nam itaque, tenetur possimus eum?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default services;
