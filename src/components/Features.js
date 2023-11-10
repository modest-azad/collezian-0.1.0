import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
function services() {
  var image = " feature-image flex justify-center items-center";
  var heading = "py-4 text-sm font-semibold";
  var para = " para text-sm text-zinc-600 ";
  return (
    <>
      <div className="service select-none m-auto grid gap-4  md:grid-cols-3 py-20 px-[5%]">
        {/* feature - 1  */}
        <div className="feature bg-blue-100  500 p-8 md:shadow  md:hover:shadow-xl rounded-3xl">
          <div className={image}>
            <img className="w-14 aspect-1/1" src="/icons/bot.png" alt="aiBot" />
          </div>

          <Link href="./GOLU_ai" className="feature-content text-center ">
            <h2 className={heading}>Chat with <span className="text-blue-600">G.O.L.U</span></h2>
            <p className={para}>
            Sint fugiat totam et repudiandae error id saepe exercitationem.
              Minus consequatur nam itaque, tenetur possimus eum?
            </p>
          </Link>
        </div>

        {/* feature - 2 */}
        <Link href="./Engineering" className="feature bg-blue-100 500 p-8 md:shadow   md:hover:shadow-xl rounded-3xl">
          <div className={image}>
            <img className="w-14 aspect-1/1" src="/icons/book.png" alt="Study_Materials" />
          </div>
          <div className="feature-content text-center">
            <h2 className={heading}>Study Materials</h2>
            <p className={para}>
              Sint fugiat totam et repudiandae error id saepe exercitationem.
              Minus consequatur nam itaque, tenetur possimus eum?
            </p>
          </div>
        </Link>

        {/* feature - 3  */}
        <div className="feature  bg-blue-100 500 p-8 md:shadow  0 md:hover:shadow-xl rounded-3xl">
          <div className={image}>
            <img className=" w-14 aspect-1/1" src="/icons/job.png" alt="career" />
          </div>

          <div className="feature-content text-center">
            <h2 className={heading}>Latest Job Updates</h2>
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
