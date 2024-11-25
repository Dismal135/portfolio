import AboutMe from "@/components/aboutMe/aboutMe";
import Clock from "@/components/clock/clock";
import Penguin from "@/components/penguin/penguin";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Portfolio () {
    return (
        <div className="p-2">
        <Clock />
        <Button size="md" className="ml-1 mt-1" as={Link} href="/">Back</Button>
        <main className="flex flex-col md:flex-row justify-center items-center">
        <Penguin />
        <AboutMe />
        </main>
        </div>
    )
}