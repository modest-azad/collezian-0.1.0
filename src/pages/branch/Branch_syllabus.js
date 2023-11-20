import Link from "next/link";
import { useState } from "react";

export default function Branch_syllabus({ heading }) {
  return (
    <>
      <div className="min-h-screen">
        <div>
          <h2 className="font-[poppins] headline text-center text-blue-800 font-bold text-2xl p-8">
            {heading}
          </h2>
        </div>

        {/* Table  */}
        <div className="university"></div>

        <div className=" px-[5%] md:px-[10%] max-sm:text-center ">
          <h2
            className=" p-2 font-semibold bg-zinc-200 rounded-lg text-zinc-800"
          >
            Bihar Engineering University, Patna
          </h2>
          <div className="text-sm grid grid-cols-1 gap-2 text-zinc-700">
            <Link href="#">1st Semster EE Syllabus</Link>
            <Link href="#">2nd Semster EE Syllabus</Link>
            <Link href="#">3rd Semster EE Syllabus</Link>
            <Link href="#">4th Semster EE Syllabus</Link>
            <Link href="#">5th Semster EE Syllabus</Link>
            <Link href="#">6th Semster EE Syllabus</Link>
          </div>
        </div>

        <hr className="my-4" />
        <div className=" px-[5%] md:px-[10%] max-sm:text-center">
          <h2 className=" p-2 font-semibold bg-zinc-200 rounded-lg text-zinc-800">
            Polytechnic | SBTE Bihar
          </h2>
          <div className="text-sm grid grid-cols-1 gap-2 text-zinc-700">
            <Link href="#">1st Semster EE Syllabus</Link>
            <Link href="#">2nd Semster EE Syllabus</Link>
            <Link href="#">3rd Semster EE Syllabus</Link>
            <Link href="#">4th Semster EE Syllabus</Link>
            <Link href="#">5th Semster EE Syllabus</Link>
            <Link href="#">6th Semster EE Syllabus</Link>
          </div>
        </div>
      </div>
    </>
  );
}
