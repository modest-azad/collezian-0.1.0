import Image from "next/image";
import Link from "next/link";
export default function Branch_template(props) {
  const card_style = "notes shadow rounded-3xl hover:shadow-lg ";
  const Image_style= "head aspect-[4/3] p-8 h-[10em] flex justify-center m-auto items-center font-bold text-blue-700  text-xl text-wrap ";
  const heading = " text-center font-semibold p-4 bg-blue-900 text-white rounded-bl-3xl rounded-br-3xl ";
  
  return (
    <>
      <h1 className="text-center font-bold p-8 text-3xl text-gray-400">{props.name}</h1>
     
      <div className="container min-h-[60vh] w-screen m-auto grid ">
        <div className="px-10 md:px-40  self-center grid gap-10 grid-flow-row grid-cols-auto md:grid-cols-3">

            <Link href="#" className={card_style}> 
              <div className={Image_style}>
                <img src="/images/book.png" className=""/>
              </div>
              <hr/>
              <div className="body">
                <h2 className={heading}>Notes</h2>
              </div>
            </Link>
            <Link href="#" className={card_style}> 
              <div className={Image_style}>
              <img src="/images/education.png" className="w-[50%]"/>
              </div>
              <hr/>
              <div className="body">
                <h2 className={heading}>Assignment/Practical</h2>
              </div>
            </Link>
            <Link href="#" className={card_style}> 
              <div className={Image_style}>
                QUESTION BANK
              </div>
              <hr/>
              <div className="body">
                <h2 className={heading}>Question Bank</h2>
              </div>
            </Link>
      

        </div>
      </div>
    </>
  );
}
