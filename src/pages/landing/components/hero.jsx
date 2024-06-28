import { heroBg } from "../../../assets";

const Hero = () => {
  return (
    <div className="flex justify-evenly">
      <div className="bg-yellow-300 w-1/2"></div>

      <div className="bg-yellow-400 w-1/2">
        <img src={heroBg} alt="hero Image" />
      </div>
    </div>
  )
};

export default Hero;