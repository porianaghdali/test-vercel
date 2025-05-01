import Image from "next/image";
import About from "./sections/about/about";
import Perspective from "./sections/perspective/perspective";
import RoadMap from "./sections/roadMap/roadMap";
import OurFeatures from "./sections/ourFeatures/ourFeatures";

const Hesnical = () => {
  return (<>
    <div className="px-[6%]">
      <About />
      <Perspective />
      
    </div><RoadMap />
      <OurFeatures /></>
  );
};
export default Hesnical;
