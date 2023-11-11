/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
export default function Footer(){
    return (
        <>

            <footer className=" w-full text-center bg-zinc-100 py-2 mt-4">
                <span className="text-sm text-gray-500 text-center light:text-gray-400">
                   Under Development <br/> © 2024 <Link href="https://collezian.in/" className="hover:underline">Collezian™</Link>. All Rights Reserved.
                    </span>

                    <div className="social-icons flex justify-center p-2">
                        <Link className="p-2 transition duration-300 hover:shadow-xl rounded-full" href="https://www.github.com/modest-azad/" target="_blank">
                            <Image src="/icons/github.png" width={30} height={30} alt=""/>
                        </Link>
                        <Link className="p-2 transition duration-300 hover:shadow-xl rounded-full" href="https://www.instagram.com/modest_azad/" target="_blank">
                            <Image src="/icons/instagram.png" width={30} height={30} alt=""/>
                        </Link>
                        <Link className="p-2 transition duration-300 hover:shadow-xl rounded-full" href="https://www.linkedin.com/in/modest-azad/" target="_blank">
                            <Image src="/icons/linkedin.png" width={30} height={30} alt=""/>
                        </Link>
                            
                    </div>

            </footer>


        </>
    );
};
