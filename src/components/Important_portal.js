/* eslint-disable @next/next/no-img-element */

function Portals(){

    return(
        <>
                <h1 id="portal-links" className="text-center text-2xl md:text-3xl font-semibold my-4">Important Portal</h1>
            <div className="important-portal bg-blue-100 rounded-3xl md:mx-[10%]">
                <div className="items text-center text-sm grid grid-cols-3 justify-center  md:grid-cols-6 gap-5 py-9 px-[5%]">
                <a href="null" className="item ">
                        <img className="w-full p-4" src="/icons/exam-color.png" alt="image" />
                        <h2>NPTEL</h2>
                    </a>
                    <a href="null" className="item">
                        <img className="w-full p-4" src="/icons/exam-color.png"   alt="image" />
                        <h2>AICTE Internship</h2>
                    </a>
                    <a href="null" className="item">
                        <img className="w-full p-4" src="/icons/exam-color.png" alt="image" />
                        <h2>National Scholarship Portal</h2>
                    </a>
                    <a href="null" className="item">
                        <img className="w-full p-4" src="/icons/exam-color.png" alt="image" />
                        <h2>Post-Metric Scholarship</h2>
                    </a>
                    <a href="null" className="item">
                        <img className="w-full p-4" src="/icons/exam-color.png" alt="image" />
                        <h2>National Digital Library</h2>
                    </a>
                    <a href="null" className="item">
                        <img className="w-full p-4" src="/icons/exam-color.png" alt="image" />
                        <h2>Spoken Tutorial</h2>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Portals;