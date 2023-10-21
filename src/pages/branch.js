import Link from "next/link";

export default function branch() {
  return (
    <>
       <div className=" dark:bg-black  w-full h-[80vh] flex flex-wrap justify-center items-center ">
        <div className="box text-center p-4">
          <div className="headline text-l  text-amber-500 p-2">Smile Please: jabardasti nahi, dil se</div>
          <div className="headline text-4xl  md:text-6xl font-black dark:text-gray-100">
            coming soon...
          </div>
          <p className="Description break-words text-sm dark:text-gray-500 py-8">
           get updates by following me on
          </p>
          <Link
            href="https://www.instagram.com/modest_azad" target="_blank"
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold  px-6 py-4  rounded-3xl "
          >
           Instagram
          </Link>
        </div>
      </div>
    </>
  );
}
