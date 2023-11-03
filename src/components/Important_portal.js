/* eslint-disable @next/next/no-img-element */

function Portals(){

    return(
        <>
                <h1 id="portal-links" className="text-center text-2xl md:text-3xl font-semibold my-4">Important Portal</h1>
            <div className="important-portal rounded-3xl md:mx-[10%]">
                <div className="items text-center text-xs grid grid-cols-4 justify-center lg:grid-cols-6  md:grid-cols-4 gap-5 py-9 px-[5%]">
                <a href="null" className="item transition-all duration-300 ease-in-out hover:translate-y-[-1em] ">
                        <img className="w-full p-4 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUd5HnBqh0VBnFzcWlyz_32Az6uxtP1ahatKFttg&s" alt="image" />
                        <h2>NPTEL</h2>
                    </a>
                    <a href="null" className="item transition-all duration-300 ease-in-out hover:translate-y-[-1em]">
                        <img className="w-full p-4 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbnc1-B3W16TYnS90yvfhDhyRfpKdNQO1V2dbvLuA-8Q&s"   alt="image" />
                        <h2>AICTE Internship</h2>
                    </a>
                    <a href="null" className="item transition-all duration-300 ease-in-out hover:translate-y-[-1em]">
                        <img className="w-full p-4 rounded-full" src="/icons/exam-color.png" alt="image" />
                        <h2>National Scholarship Portal</h2>
                    </a>
                    <a href="null" className="item transition-all duration-300 ease-in-out hover:translate-y-[-1em]">
                        <img className="w-full p-4 rounded-full" src="/icons/exam-color.png" alt="image" />
                        <h2>Post-Metric Scholarship</h2>
                    </a>
                    <a href="null" className="item transition-all duration-300 ease-in-out hover:translate-y-[-1em]">
                        <img className="w-full p-4 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/National_Digital_Library_of_India.png" alt="image" />
                        <h2>National Digital Library</h2>
                    </a>
                    <a href="null" className="item transition-all duration-300 ease-in-out hover:translate-y-[-1em]">
                        <img className="w-full p-4 rounded-full" src="https://asset.brandfetch.io/id27aU8Kyu/id97pzxNTf.jpeg" alt="image" />
                        <h2>Spoken Tutorial</h2>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Portals;