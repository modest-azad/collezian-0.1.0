import Link from "next/link";

export default function Branch_syllabus({ heading }) {
  return (
    <>
    <div className="min-h-screen">
      <div>
        <h2 className="headline text-center font-bold text-2xl p-8">
          {heading}
        </h2>
      </div>

      {/* Table  */}
      <div className=" px-[5%] md:px-[10%] max-sm:text-center">
        <h2 className="font-bold text-xl text-blue-500 py-4">Electrical Engineering (BEU)</h2>
        <div className="text-sm grid grid-cols-1 gap-2 text-gray-700">
        <Link href="#">1st Semster EE Syllabus</Link>
        <Link href="#">2nd Semster EE Syllabus</Link>
        <Link href="#">3rd Semster EE Syllabus</Link>
        <Link href="#">4th Semster EE Syllabus</Link>
        <Link href="#">5th Semster EE Syllabus</Link>
        <Link href="#">6th Semster EE Syllabus</Link>
        <Link href="#">7th Semster EE Syllabus</Link>
        <Link href="#">8th Semster EE Syllabus</Link>
        </div>
      </div>

      <hr className="my-4" />
      <div className=" px-[5%] md:px-[10%] max-sm:text-center">
        <h2 className="font-bold text-xl text-blue-500 py-4">Electrical Engineering (SBTE Bihar)</h2>
        <div className="text-sm grid grid-cols-1 gap-2 text-gray-700">
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
