import Clock from "@/components/clock/clock";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Portfolio () {
    return (
        <>
        <Clock />
        <Button size="md" className="absolute left-1 top-1" as={Link} href="/">Back</Button>
        </>
    )
}