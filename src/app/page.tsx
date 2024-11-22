'use client'

import CitySkyline from "@/components/cityscale/cityscale";
import Clock from "@/components/clock/clock";
import Quote from "@/components/quote/quote";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDay, setIsDay] = useState<string | boolean>("loading");

    useEffect(()=>{
        const hour = new Date().getHours();
        setIsDay(hour >= 6 && hour < 18)
        const interval = setInterval(()=>{
            setIsDay(hour >= 6 && hour < 18)
        }, 3600000)

        return ()=> clearInterval(interval)
    }, [])

    if(isDay === "loading") {
        return
    }
  return (
    <>
    <Button className="fixed top-1 z-50 left-1" as={Link} href="/portfolio">view Portfolio</Button>
    <Clock />
    <CitySkyline isDay={isDay} />
    <Quote />
    </>
  );
}
