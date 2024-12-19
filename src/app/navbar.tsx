'use client'

import Link from "next/link";
import Clock from "./clock";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const path = usePathname();
    console.log(path);

    return (
        <div className="fixed top-0 z-30 flex justify-between items-center w-full px-2 py-2">
            <Clock />
            <div className="flex gap-2">
            <Link className="bg-white p-2 rounded-lg text-sm hover:bg-gray-100" href={path === '/' ? '/portfolio' : '/'}>{path === '/' ? 'Go to Portfolio' : 'Go Back'}</Link>
            </div>
        </div>
    )
}

export default Navbar;