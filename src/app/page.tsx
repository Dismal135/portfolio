'use client'

import CitySkyline from "@/components/cityscale/cityscale";
import Clock from "@/components/clock/clock";
import FerrisWheel from "@/components/ferrisWheel/ferrisWheel";
import Quote from "@/components/quote/quote";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDay, setIsDay] = useState<string | boolean>("loading");

    useEffect(()=>{
        const hour = new Date().getHours();
        setTimeout(()=>{
            setIsDay(hour >= 6 && hour < 18)
        }, 6000)

        const interval = setInterval(()=>{
            setIsDay(hour >= 6 && hour < 18)
        }, 3600000)

        return ()=> clearInterval(interval)
    }, [])

    if(isDay === "loading") {
        return <FerrisWheel />
    }
  return (
    <>
    <Clock />
    <CitySkyline isDay={isDay} />
    <Quote />
    </>
  );
}
