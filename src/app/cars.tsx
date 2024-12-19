import Image from "next/image"
import car from '../../public/cars/car.png'
import car2 from '../../public/cars/car2.png'
import car3 from '../../public/cars/car3.png'

const Cars = () => {
    return (
        <div>
            <Image className="car" alt='car' src={car} />
            <Image className="car2" alt='car' src={car2} />
            <Image className="car3" alt='car' src={car3} />
        </div>
    )
}

export default Cars