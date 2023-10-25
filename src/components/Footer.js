/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export default function Footer(){
    return (
        <>

            <footer className=" w-screen text-center bottom-0 p-2 ">
                <span className="text-sm text-gray-500 text-center light:text-gray-400">
                    © 2024 <Link href="https://collezian.in/" className="hover:underline">Collezian™</Link>. All Rights Reserved.
                    </span>
            </footer>


        </>
    );
};
