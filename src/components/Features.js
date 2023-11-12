import Link from "next/link";
import Image from "next/image";

function services() {
  var image = " feature-image flex justify-center items-center";
  var heading = "py-2 text font-semibold";
  var para = " para text-sm text-zinc-700 ";
  return (
    <div className="py-8">
      <h1
        id="portal-links"
        className="  text-zinc-800 max-md:text-center m-auto text-2xl text-center font-semibold"
      >
        Features
      </h1>
      <div className="service  m-auto grid gap-8  md:grid-cols-3 my-8  px-[5%]">
        {/* feature - 1  */}
        <Link
          href="./GOLU_ai"
          className="feature select-none  500 p-6 shadow lg:hover:shadow-blue-600  rounded-2xl"
        >
          <div className={image}>
            <Image
              width={100}
              height={100}
              className="  aspect-1/1"
              src="/icons/gif/golu_ai.gif"
              alt="GOLU ai"
            />
          </div>

          <div className="feature-content text-center ">
            <h2 className={heading}>
              <span className="text-blue-600">GOLU ai</span>
            </h2>
            <p className={para}>
              Assist you in your learning process,
              stay organized and on track with your assignments and deadlines.
            </p>
          </div>
        </Link>

        {/* feature - 2 */}
        <Link
            href="https://chat.whatsapp.com/IEzLC5bZosdE4JkjQyIIKk" className="feature select-none  500 p-8 shadow lg:hover:shadow-blue-600  0 rounded-3xl">
          <div className={image}>
            <Image
              width={100}
              height={100}
              className=" aspect-1/1"
              src="/icons/gif/three-friends.gif"
              alt="career"
            />
          </div>

          <div            
            className="feature-content text-center"
          >
            <h2 className={heading}>Study Groups</h2>
            <p className={para}>
              Get free access of best{" "}
              <span className="text-green-600">Whatsapp</span> and{" "}
              <span className="text-blue-600">Telegram</span> Groups . Join
              group that fullfill you requirments.
            </p>
          </div>
        </Link>

        {/* feature - 3 */}
        <Link
          href="./Engineering"
          className="feature select-none  500 p-8 shadow lg:hover:shadow-blue-600  rounded-3xl"
        >
          <div className={image}>
            <Image
              width={100}
              height={100}
              className=" aspect-1/1"
              src="/icons/gif/reading.gif"
              alt="Study_Materials"
            />
          </div>
          <div className="feature-content text-center">
            <h2 className={heading}>College Study Materials</h2>
            <p className={para}>
              Sint fugiat totam et repudiandae error id saepe exercitationem.
              Minus consequatur nam itaque?
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default services;
