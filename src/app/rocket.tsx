import Image from "next/image"
import rocket from '../../public/rocket.png'

const Rocket = () => {
    return (
        <Image className="w-6 h-6 fixed z-0 left-[40%] top-[40%] rocket" src={rocket} alt="rocket" />
    )
}

export default Rocket