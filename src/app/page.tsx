import Cars from "./cars";
import City from "./city";
import './city.css'
import Rocket from "./rocket";

{/* clouds are in the city */}

export default function Home() {
  return (
    <>
    <City />
    <Cars />
    <Rocket />
    </>
  );
}
