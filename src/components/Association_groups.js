/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
function Association_groups() {
  return (
    
    <div id="#study_groups" className="bg-blue-200 py-8 px-[5%]">
      <h1
        id="portal-links"
        className=" text-zinc-800 max-md:text-center m-auto text-2xl text-center font-semibold"
      >
      Top  Associated Groups
      </h1>
      <div className="important-portal   m-auto my-8 lg:mx-[10%]">
        <div className="items h-full text-zinc-700 text-center text-sm flex gap-4  justify-center justify-items-center  ">
          {/* group  */}
          <a
            href="https://t.me/bihar_btech_discussion"
            target="_blank"
            className="item"
          >
            <img width={120} height={120}
              className=" p-4 rounded-full"
              src="/Groups_Image/Bihar_btech_discussion.jpg"
              alt="image"
            />
          </a>
          {/* group */}
          <a
            href="https://chat.whatsapp.com/HN4Ogn3uxA85psql0v2IvF"
            target="_blank"
            className="item"
          >
            <img width={120} height={120}
              className=" p-4 rounded-full"
              src="/Groups_Image/collezian_dsa.jpg"
              alt="image"
            />
            
          </a>

          <a
            href="https://chat.whatsapp.com/DPyHjemxvt17fbhSFMIVYw"
            target="_blank"
            className="item"
          >
            <img width={120} height={120}
              className=" p-4 rounded-full"
              src="/Groups_Image/off_campus_placements.jpg"
              alt="image"
            />
           
          </a>
          <a
            href="https://t.me/collezian_bcece_le"
            target="_blank"
            className="item"
          >
            <img width={120} height={120}
              className=" p-4 rounded-full"
              src="/Groups_Image/bcece_le_quiz.png"
              alt="image"
            />
          
          </a>
        </div>
      </div>
    </div>
  );
}
export default Association_groups;
