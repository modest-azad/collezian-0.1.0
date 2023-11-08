/* eslint-disable @next/next/no-img-element */

function Portals() {
  return (
    <>
      <h1
        id="portal-links"
        className="font-[rosmatika]  text-blue-600 max-md:text-center m-auto md:text-2xl text-center font-semibold"
      >
        Government Official Portals
      </h1>
      <div className="important-portal md:w-[60em] m-auto my-2">
        <div className=" items h-full text-gray-700 text-center text-xs grid grid-cols-4 md:grid-cols-8  justify-center justify-items-center gap-[5%] ">
          <a
            href="http://beu-bih.ac.in/"
            target="_blank"
            className="item transition-all duration-300 ease-in-out md:hover:translate-y-[-0.5em] "
          >
            <img
              className="w-[8em] p-4 rounded-full"
              src="https://media.licdn.com/dms/image/D4D0BAQFFZt-FTCDSsA/company-logo_200_200/0/1697210098603/beupatna_logo?e=2147483647&v=beta&t=TZvQPymtB1cGXerbClj2CyA9bmVwq3mVJvpPEwE2LB4"
              alt="image"
            />
            <h2>BEU Patna</h2>
          </a>
          <a
            href="https://sbteonline.in/"
            target="_blank"
            className="item transition-all duration-300 ease-in-out md:hover:translate-y-[-0.5em] "
          >
            <img
              className="w-[8em] p-4 rounded-full"
              src="https://sbteonline.in/VAADIN/themes/ems/img/sbte.png"
              alt="image"
            />
            <h2>SBTE Bihar</h2>
          </a>
          <a
            href="https://nptel.ac.in/"
            target="_blank"
            className="item  transition-all duration-300 ease-in-out md:hover:translate-y-[-0.5em] "
          >
            <img
              className="w-[8em] p-4 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUd5HnBqh0VBnFzcWlyz_32Az6uxtP1ahatKFttg&s"
              alt="image"
            />
            <h2>NPTEL</h2>
          </a>
          <a
            href="https://internship.aicte-india.org/"
            target="_blank"
            className="item transition-all duration-300 ease-in-out md:hover:translate-y-[-0.5em]"
          >
            <img
              className="w-[8em] p-4 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbnc1-B3W16TYnS90yvfhDhyRfpKdNQO1V2dbvLuA-8Q&s"
              alt="image"
            />
            <h2>Internship</h2>
          </a>
          <a
            href="https://ndl.iitkgp.ac.in/"
            target="_blank"
            className="item transition-all duration-300 ease-in-out md:hover:translate-y-[-0.5em]"
          >
            <img
              className="w-[8em] p-4 rounded-full"
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/National_Digital_Library_of_India.png"
              alt="image"
            />
            <h2>National Digital Library</h2>
          </a>
          <a
            href="https://scholarships.gov.in/"
            target="_blank"
            className="item transition-all duration-300 ease-in-out md:hover:translate-y-[-0.5em]"
          >
            <img
              className="w-[8em] p-4"
              src="/logo/fav-dark.png"
              alt="image"
            />
            <h2>National Scholarship Portal</h2>
          </a>
          <a
            href="https://pmsonline.bih.nic.in/"
            target="_blank"
            className="item transition-all duration-300 ease-in-out md:hover:translate-y-[-0.5em]"
          >
            <img
              className="w-[8em] p-4"
              src="/logo/fav-dark.png"
              alt="image"
            />
            <h2>Post-Metric Scholarship</h2>
          </a>
          
          <a
            href="https://spoken-tutorial.in/login/"
            target="_blank"
            className="item transition-all duration-300 ease-in-out md:hover:translate-y-[-0.5em]"
          >
            <img
              className="w-[8em] p-4 rounded-full"
              src="https://asset.brandfetch.io/id27aU8Kyu/id97pzxNTf.jpeg"
              alt="image"
            />
            <h2>Spoken Tutorial</h2>
          </a>
        </div>
      </div>
    </>
  );
}
export default Portals;
