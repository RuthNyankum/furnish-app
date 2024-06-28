import { heroBg } from "../../../assets";

const Hero = () => {
  return (
    <div className="flex justify-evenly h-screen">
      <div className="bg-[#00D1D3] w-1/2 place-content-center pl-40 pr-20">
        <div className="mx-auto w-fit flex flex-col items-start gap-y-4">
          <div className="flex flex-col text-5xl">
            <span className="font-thin">Studio</span>
            <span className="font-bold">Professionalism and Creativity</span>
          </div>
          
            <p className="w-96">highlighting your personal touch, highlighting your personal touch, highlighting your personal touch</p>
            <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg text-deepblue uppercase font-bold">Discover</button>
        </div>
      </div>

      <div className="bg-[#00545F] w-1/2"> 
      {/* you can paste the color in the tailwind.config.js to the theme ther if you are using the color in other pages */}
        <img src={heroBg} alt="hero Image" className="object-contain w-full h-full" />
      </div>
    </div>
  )
};

export default Hero;