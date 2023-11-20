import Image from "next/image";
import Link from "next/link";
export default function Roadmaps() {
  return (
    <>
      <div className="min-h-[80vh] flex flex-col justify-center items-center">
        <Image
          className="mx-1 "
          src="/icons/map.svg"
          width={50}
          height={50}
          alt="upload"
        />

    <p className="font-bold">Roadmaps</p>
    
        <h2 className="font-[poppins] headline text-center text-blue-800 font-bold text-4xl">
          Coming Soon...
        </h2>
        <Link
          href="https://chat.whatsapp.com/IEzLC5bZosdE4JkjQyIIKk"
          className="flex m-auto w-max rounded-3xl  ring-2 ring-green-600 bg-green-200 shadow hover:shadow-xl text-[#001e2b]  font-semibold px-4 py-3 my-8"
        >
          <Image
            className="mx-1 "
            src="/icons/users-2.svg"
            width={20}
            height={20}
            alt="upload"
          />
          Join Whatsapp{" "}
        </Link>
      </div>
    </>
  );
}
