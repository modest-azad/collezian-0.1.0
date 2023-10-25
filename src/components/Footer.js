/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export default function Footer(){
    return (
        <>

            <footer className=" w-full text-center bottom-0 ">
                <span className="text-sm text-gray-500 text-center light:text-gray-400">
                   underDevelopment © 2024 <Link href="https://collezian.in/" className="hover:underline">Collezian™</Link>. All Rights Reserved.
                    </span>
            </footer>


        </>
    );
};
