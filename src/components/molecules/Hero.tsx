import { Link } from "react-router-dom";
import HeroImage from "../../assets/HeroImage.webp";

const Hero = () => {
  return (
    <section className="flex gap-3 justify-evenly text-white">
      <div
        className="min-h-96 w-96  font-mono text-wrap text-justify 
      flex flex-col justify-center items-center text-primary font-extrabold gap-4"
      >
        <h1 className="text-2xl">COPWORK</h1>
        <h1 className="text-xl">Your co-operative workspace</h1>
        <h1>Sign up to know what all can be done</h1>
        <h1>Speeding up the work that needs to be done </h1>
        <div className="flex gap-10 mt-20">
          <span className="container bg-red-400 w-40 h-52 px-2 bg-opacity-10 rounded-xl py-5 text-left ">
            <h1 className="mb-10">Play games with your buddies</h1>
             <Link to="/" className="text-cyan-950 underline  ">Learn More </Link>
          </span>
          <span className="container bg-red-400 w-40 h-52 px-2 bg-opacity-10 rounded-xl py-5 text-left ">
           <h1 className="mb-10"> Metaverse Rooms for recreating the essence of together space </h1>
            <Link to="/" className="text-cyan-950 underline  ">Learn More </Link>
          </span>
          <span className="container bg-red-400 w-40 h-52 px-2 bg-opacity-10 rounded-xl py-5 text-left ">
          <h1 className="mb-10">Chat and talk over video as a group </h1>
          <Link to="/" className="text-cyan-950 underline  ">Learn More </Link>
          </span>
        </div>
      </div>
      <div className=" w-auto h-96 mt-10 overflow-hidden flex flex-cols">
        <img
          src={HeroImage}
          alt="Hero image"
          className="object-contain rounded-b-full rounded-l-full"
        />
      </div>
    </section>
  );
};

export default Hero;
