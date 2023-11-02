/* eslint-disable @next/next/no-img-element */
function services() {
  var heading = "py-4 font-semibold text-xl";
  var image = " feature-image md:h-[40%] flex justify-center items-center py-4";
  var para = "para text-sm text-gray-600 ";
  return (
    <>
      <div className="service w-full m-auto grid grid-rows-auto grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 p-[5%] md:px-[10%]">
        {/* feature - 1  */}
        <div className="feature col-span-4 max-sm:m-8 p-4 md:shadow transition-all duration-300 ease-in-out bg-orange-100 hover:text-orange-500 md:hover:shadow rounded-3xl">
          <div className={image}>
            <img className="w-[40%] aspect-1/1" src="/icons/bot.png" alt="aiBot" />
          </div>

          <div className="feature-content text-center ">
            <h2 className={heading}>Chat with AI</h2>
            <p className={para}>
            Sint fugiat totam et repudiandae error id saepe exercitationem.
              Minus consequatur nam itaque, tenetur possimus eum?
            </p>
          </div>
        </div>

        {/* feature - 2 */}
        <div className="feature col-span-4 max-sm:m-8 p-4 md:shadow transition-all duration-300 ease-in-out bg-gray-100 hover:text-gray-500 md:hover:shadow rounded-3xl">
          <div className={image}>
            <img className="w-[40%] aspect-1/1" src="/icons/book.png" alt="Study_Materials" />
          </div>
          <div className="feature-content text-center">
            <h2 className={heading}>Free Resourses</h2>
            <p className={para}>
              Sint fugiat totam et repudiandae error id saepe exercitationem.
              Minus consequatur nam itaque, tenetur possimus eum?
            </p>
          </div>
        </div>

        {/* feature - 3  */}
        <div className="feature col-span-4 max-sm:m-8 p-4 md:shadow transition-all duration-300 ease-in-out bg-green-100 hover:text-green-500 md:hover:shadow rounded-3xl">
          <div className={image}>
            <img className=" w-[40%] aspect-1/1" src="/icons/job.png" alt="career" />
          </div>

          <div className="feature-content text-center">
            <h2 className={heading}>Job Updates</h2>
            <p className={para}>
            Sint fugiat totam et repudiandae error id saepe exercitationem.
              Minus consequatur nam itaque, tenetur possimus eum?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default services;
