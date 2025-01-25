'use client'

import { useState } from "react";
import Penguin from "./penguin/penguin";
import Image from "next/image";
import profile from '../../../public/profile.png'

export default function Portfolio () {
    const [state, setState] = useState(true);
    return (
        state ? (
            <div className="flex justify-center items-center h-[100vh] bg-black text-white font-bold text-xl">
            <div className="flex justify-center items-center">
             <Penguin />
             <div>
             <h1>Hi! I am Phyo Thiha a fullstack webdeveloper.</h1>
             <button onClick={()=> setState(!state)} className="bg-white p-2 rounded-lg text-sm hover:bg-gray-200 text-black">Enter</button>
             </div>
             </div>
        </div>
        ) :

        <div className="flex flex-col gap-10 justify-center items-center h-[100vh] bg-black text-white font-bold sm:flex-row">
            <Image alt="profile" src={profile} className="rounded-[50%] border border-white w-[100px] h-[100px]" />
            <div  className="w-[300px] flex flex-col gap-2">
            <h1 className="font-normal">Name - Phyo Thiha</h1>
            <h1>Frontend - <span className="font-normal">html, css, javascript, reactjs, vuejs, angularjs, nextjs, tailwind, bootstrap, jquery, ajax</span></h1>
            <h1>Backend - <span className="font-normal">nodejs, express, python, php</span></h1>
            <h1>Database - <span className="font-normal">sqlite, mysql, mongodb, postgres</span></h1>
            <h1>Auth - <span className="font-normal">passportjs, authjs</span></h1>
            <h1>Version control - <span className="font-normal">git, github</span></h1>
            <h1>Deployment - <span className="font-normal">docker containerization</span></h1>
            </div>
            <div className="flex flex-col gap-2">
                <h1>General Knowledge</h1>
                <h1>Operating System - <span className="font-normal">windows, linux</span></h1>
                <h1>Technical Skills - <span className="font-normal">Comptia A+, NE</span></h1>
            </div>
        </div>
    )
};