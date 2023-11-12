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
                        <Link className="hover:shadow-xl rounded-full" href="https://www.github.com/modest-azad/" target="_blank">
                        <Image className="rounded-full p-2" src="/icons/X.png" width={40} height={40} alt=""/>
                        </Link>
                        <Link className="hover:shadow-xl rounded-full" href="https://www.instagram.com/modest_azad/" target="_blank">
                            <Image className="rounded-full p-2" src="/icons/instagram.png" width={40} height={40} alt=""/>
                        </Link>
                            
                    </div>

            </footer>


        </>
    );
};
