/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
function Association_groups() {
  return (
    
    <section id="#study_groups" className="py-8 px-[5%]">
      <h1
        id="portal-links"
        className=" flex justify-center text-zinc-800 max-md:text-center m-auto text-2xl text-center font-semibold"
      >
        <Image className="mx-1" src="/icons/users-2.svg" width={30} height={30} alt="upload"/>
      Groups
      </h1>
      <p className=" Description break-words text-center text-sm text-zinc-700 my-2">
          &quot;Top associated engineering Whatsapp and Telegram groups of your state.&quot;
          </p>
      <div className="important-portal m-auto my-4 lg:mx-[10%]">
        <div className="items h-full text-zinc-700 text-center text-sm flex gap-4  justify-center  ">
           {/* group */}
           <a
            href="https://t.me/Diplomadiscussionroom"
            target="_blank"
            className="item"
          >
            <img width={120} height={120}
              className=" p-4 rounded-full"
              src="/Groups_Image/DDG_logo.jpg"
              alt="image"
            />
          </a>
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
    </section>
  );
}
export default Association_groups;
